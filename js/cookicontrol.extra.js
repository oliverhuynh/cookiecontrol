
  (function($, window) {
    window.CookieControlSt = {
      h: false,
      plugins: {
        cbdnecessary: {
          required: true,
          execs: ['ccAddHtmlClass']
        },
        cbdpreferenece: {
          required: false,
          cookies: ['lang', 'recent_slide', 'atp_jplayer']
        },
        cbdstatistics: {
          required: false,
          execs: ['ccAddAnalytics', 'ccAddLinkedIn'],
          cookies: ['_ga', '_gat', '_gid']
        },
        cbdmarketing: {
          required: false,
          execs: ['addThisExec']
        }
      },
      unload: function() {
        console.warn('Unload and cleaning cookies');
        $.each(this.categories, function() {
          return this.unload();
        });
        if (!this.enable) {
          return CookieControl.delAllCookies(CookieControl.options.protectedCookies);
        }
      },
      attach: function(h) {
        var t;
        this.h = h;
        this.category.scan($('.cbwrapper'), h);
        this.globalToggle.attach.call(this);
        /*
        exec is triggered in cookicontrol 5.1
        if @h.consented()
          @exec()
        */
        t = this;
        $(window).on('beforeunload', function() {
          t.unload();
        });
      },
      globalToggle: {
        attach: function() {
          var ccs;
          ccs = this;
          $("#cccwr .ton").click(function() {
            return ccs.allow();
          });
          $("#cccwr .toff").click(function() {
            return ccs.deny();
          });
        }
      },
      categories: [],
      enable: true,
      enableState: 0, // 0, -1, 1
      accept: function() {},
      deny: function(clean) {
        if (this.enableStat === -1) {
          return;
        }
        this.enableState = -1;

        // Rewrite cookiecontrol
        CookieControl._jc = false;
        clean = clean || "na";
        if (clean === "na") {
          CookieControl.setCookie(CookieControl.options.cookieName, 'no');
        } else {
          CookieControl.setCookie(CookieControl.options.cookieName, '', true);
        }
        // Variable
        $('#cctoggle').removeClass("cctoggle-on");
        // My stuff
        this.enable = false;
        return $("body").removeClass("cs-enabled");
      },
      allow: function() {
        if (this.enableState === 1) {
          return;
        }
        this.enableState = 1;

        // Rewrite cookiecontrol
        CookieControl._jc = true;
        CookieControl.acceptEvent();
        CookieControl.setCookie(CookieControl.options.cookieName, 'yes');
        // Variable
        $('#cctoggle').addClass("cctoggle-on");
        // My stuff
        this.exec();
        this.enable = true;
        return $("body").addClass("cs-enabled");
      },
      exec: function() {
        return $.each(this.categories, function() {
          return this.doexec();
        });
      },
      category: {
        id: false,
        dom: false,
        c: false,
        h: false,
        state: true,
        unload: function() {
          var $h, cks;
          if (!this.state || !CookieControlSt.enable) {
            cks = window.CookieControlSt.plugins[this.id].cookies || [];
            console.warn('Clean cookies for ' + this.id);
            $h = this.h;
            return $.each(cks, function() {
              var ck, e, error;
              ck = this;
              try {
                return $h.delCookie(ck);
              } catch (error1) {
                error = error1;
                e = error;
                return console.warn(e);
              }
            });
          }
        },
        doexec: function() {
          var s;
          s = this.state ? 'on' : 'off';
          return this.exec[s].apply(this);
        },
        exec: {
          on: function() {
            var execs, t;
            execs = window.CookieControlSt.plugins[this.id].execs || [];
            t = this;
            console.warn(this.id + ' is allowed and executed');
            return $.each(execs, function() {
              var cb, e, error;
              cb = this;
              try {
                return window[cb].apply(t);
              } catch (error1) {
                error = error1;
                e = error;
                return console.warn(e);
              }
            });
          },
          off: function() {}
        },
        toggle: {
          on: function() {
            this.state = true;
            return this.toggle.refresh.apply(this);
          },
          off: function() {
            this.state = false;
            return this.toggle.refresh.apply(this);
          },
          refresh: function() {
            var s;
            s = this.state ? 'on' : 'off';
            return this.h.setCookie('cat_' + this.id, s);
          },
          load: function() {
            var s;
            s = this.h.getCookie('cat_' + this.id) || 'on';
            this.state = s === 'on';
            this.dom.find('.CBDialogBodyLevelButton').attr('checked', this.state);
          }
        },
        initToggle: function() {
          var t;
          t = this;
          this.dom.find('.CBDialogBodyLevelButton').change(function() {
            var s;
            s = this.checked ? 'on' : 'off';
            t.toggle[s].apply(t);
          });
          // Default state
          t.toggle.load.apply(t);
        },
        init: function($dom, h) {
          this.dom = $dom;
          this.h = h;
          this.id = this.dom.attr('id');
          CookieControl.options.protectedCookies.push('cccat_' + this.id);
          this.initToggle();
        },
        scan: function(cl, h) {
          var t;
          t = this;
          return $(cl).each(function() {
            return t.newitem($(this), h);
          });
        },
        newitem: function(a, h) {
          var t;
          t = jQuery.extend(true, {}, this);
          t.init(a, h);
          CookieControlSt.categories.push(t);
          return t;
        }
      }
    };
  })(jQuery, window);
