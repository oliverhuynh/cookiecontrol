
  (function($, window) {
    window.CookieControlSt = {
      h: false,
      plugins: {
        cbdnecessary: {
          required: true,
          execs: ["ccAddHtmlClass"]
        },
        cbdpreferenece: {
          required: false
        },
        cbdstatistics: {
          required: false,
          execs: ["ccAddAnalytics"]
        },
        cbdmarketing: {
          required: false
        }
      },
      attach: function(h) {
        this.h = h;
        this.category.scan($(".cbwrapper"), h);
      },
      /*
      exec is triggered in cookicontrol 5.1
      if @h.consented()
        @exec()
      */
      categories: [],
      accept: function() {},
      // When user check accept only, not initially
      deny: function() {},
      allow: function() {
        return this.exec();
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
        /*
        Toggle
        */
        state: true,
        doexec: function() {
          var s;
          s = this.state ? "on" : "off";
          return this.exec[s].apply(this);
        },
        exec: {
          on: function() {
            var execs, t;
            execs = window.CookieControlSt.plugins[this.id].execs || [];
            t = this;
            console.warn(this.id + " is allowed and executed");
            return $.each(execs, function() {
              var cb, e;
              cb = this;
              try {
                return window[cb].apply(t);
              } catch (error) {
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
            s = this.state ? "on" : "off";
            this.h.setCookie("cat_" + this.id, s);
            return CookieControl.options.protectedCookies.push("cat_" + this.id);
          },
          // Do exec will be executed in next reload only via CookieControl.min
          // @doexec()
          load: function() {
            var s;
            s = this.h.getCookie("cat_" + this.id) || "on";
            this.state = s === "on";
            this.dom.find(".CBDialogBodyLevelButton").attr("checked", this.state);
          }
        },
        initToggle: function() {
          var t;
          t = this;
          this.dom.find(".CBDialogBodyLevelButton").change(function() {
            var s;
            s = this.checked ? "on" : "off";
            t.toggle[s].apply(t);
          });
          // Default state
          t.toggle.load.apply(t);
        },
        init: function($dom, h) {
          this.dom = $dom;
          this.h = h;
          this.id = this.dom.attr("id");
          this.initToggle();
        },
        /*
        Items registration
        */
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

