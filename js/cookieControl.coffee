(($, window) ->
  window.CookieControlSt =
    category:
      dom: false
      c: false
      d: false
      h: false
      ###
      Toggle
      ###
      togglemods:
        information_only:
          first: ->
            @c.removeClass("ccc-pause").addClass("ccc-go")
            #@dom.find(".cctoggle-text").html(CookieControl.options.cookieOnText)
            @dom.find(".cctoggle-text").addClass("cctoggle-text-on")
            if @d == false
              @c.removeClass('ccc-pause').addClass 'ccc-go'
              @dom.find(".cctoggle-text").removeClass('cctoggle-text-off').addClass 'cctoggle-text-on'
              @dom.find(".cctoggle-text").html CookieControl.options.cookieOnText
              CookieControl._jc = true
              CookieControl.acceptEvent()
              CookieControl.setCookie CookieControl.options.cookieName, 'yes'
              CookieControl.cookiesAllowedEvent()
            return
        implicit:
          first: ->
            if !@d
              @c.removeClass('ccc-pause').addClass 'ccc-go'
              $("#cccwr #ccc-cookies-switch #ccc-cookies-checkbox").attr("checked", true);
              @dom.find(".cctoggle").addClass("cctoggle-on");
              @dom.find(".cctoggle-text").removeClass("cctoggle-text-off").addClass("cctoggle-text-on");
              # @dom.find(".cctoggle-text").html(CookieControl.options.cookieOnText)
              CookieControl._jc = true
              CookieControl.acceptEvent()
              CookieControl.setCookie CookieControl.options.cookieName, 'yes'
              CookieControl.cookiesAllowedEvent()
            CookieControl.options.protectedCookies.push CookieControl.options.cookieName
            if @d == "yes"
              $('#cccwr #ccc-cookies-switch #ccc-cookies-checkbox').attr 'checked', true
              @dom.find(".cctoggle").addClass 'cctoggle-on'
              @dom.find(".cctoggle-text").removeClass('cctoggle-text-off').addClass 'cctoggle-text-on'
              #@dom.find(".cctoggle-text").html CookieControl.options.cookieOnText
            else
              $("#cccwr #ccc-cookies-switch #ccc-cookies-checkbox").removeAttr("checked")
              @dom.find(".cctoggle").removeClass 'cctoggle-on'
              @dom.find(".cctoggle-text").removeClass('cctoggle-text-on').addClass 'cctoggle-text-off'
              #@dom.find(".cctoggle-text").html CookieControl.options.cookieOffText
              $("#cccwr #ccc-implicit-warning").show()
            return
        explicit:
          first: ->
            b = @h.getCookie("ccNoPopup")
            if b == 'no'
              $("#cccwr #cchide-popup").attr("checked", true)
            else
              $("#cccwr #cchide-popup").removeAttr("checked")
            $("#cccwr #ccc-cookies-switch").show()
            @dom.find(".cctoggle-text").addClass("cctoggle-text-off")
            # @dom.find(".cctoggle-text").html(CookieControl.options.cookieOffText)
            if @d == "yes"
              $('#cccwr #ccc-cookies-switch #ccc-cookies-checkbox').attr 'checked', true
              @dom.find(".cctoggle").addClass 'cctoggle-on'
              @dom.find(".cctoggle-text").removeClass('cctoggle-text-off').addClass 'cctoggle-text-on'
              @dom.find(".cctoggle-text").html CookieControl.options.cookieOnText
            else
              $("#cccwr #ccc-cookies-switch #ccc-cookies-checkbox").removeAttr("checked")
              @dom.find(".cctoggle").removeClass 'cctoggle-on'
              @dom.find(".cctoggle-text").removeClass('cctoggle-text-on').addClass 'cctoggle-text-off'
              $("#cccwr #ccc-explicit-checkbox").show()

            return
      initToggle: ->
        $dom = @dom
        @c = $("#ccc-state")
        @dom.find('.cctoggle').click ->
          if $(this).hasClass('cctoggle-on')
            # $dom.find('.cctoggle-text').html ''
            $dom.find('.cctoggle-text').removeClass 'cctoggle-text-on'
            $(this).animate { 'background-position-x': '0' }, 250, ->
              $(this).removeClass 'cctoggle-on'
              c.removeClass('ccc-go').addClass 'ccc-pause'
              CookieControl._jc = false
              if CookieControl.options.consentModel != 'explicit'
                CookieControl.setCookie CookieControl.options.cookieName, 'no'
              else
                CookieControl.setCookie CookieControl.options.cookieName, '', true
              CookieControl.cookiesNotAllowedEvent()
              if CookieControl.options.consentModel == 'implicit'
                $('#cccwr #ccc-implicit-warning').slideDown()
                $('#cccwr .ccc-widget').fadeOut 5000
              else
                if CookieControl.options.consentModel == 'explicit'
                  if jQuery.browser.msie and parseInt(jQuery.browser.version, 10) == 7
                    jQuery('#cccwr #ccc-explicit-checkbox').show()
                  else
                    jQuery('#cccwr #ccc-explicit-checkbox').slideDown()
              $dom.find('.cctoggle-text').addClass 'cctoggle-text-off'
              # $dom.find('.cctoggle-text').html CookieControl.options.cookieOffText
              CookieControl.delAllCookies CookieControl.options.protectedCookies
              return
          else
            # $dom.find('.cctoggle-text').html ''
            $dom.find('.cctoggle-text').removeClass 'cctoggle-text-off'
            $(this).animate { 'background-position-x': '100%' }, 250, ->
              $(this).addClass 'cctoggle-on'
              c.removeClass('ccc-pause').addClass 'ccc-go'
              CookieControl._jc = true
              CookieControl.acceptEvent()
              CookieControl.setCookie CookieControl.options.cookieName, 'yes'
              CookieControl.cookiesAllowedEvent()
              if CookieControl.options.consentModel == 'implicit'
                $('#cccwr #ccc-implicit-warning').slideUp()
              else
                if CookieControl.options.consentModel == 'explicit'
                  $('#cccwr #ccc-explicit-checkbox').slideUp()
              $dom.find('.cctoggle-text').addClass 'cctoggle-text-on'
              # $dom.find('.cctoggle-text').html CookieControl.options.cookieOnText
              jQuery('#cccwr .ccc-widget').fadeOut 2000
              return
          return
        return
      init: ($dom, h, d) ->
        @dom = $dom
        @h = h
        @d = d
        @initToggle()
        @togglemods[@h.options.consentModel].first.call(@)
        return
      ###
      Items registration
      ###
      scan: (cl, h, d)->
        t = this
        $(cl).each(() ->
            t.newitem($(this), h, d);
        )
      newitem: (a, h, d) ->
        t = jQuery.extend(true, {}, this)
        t.init(a, h, d)
        t
  return
) jQuery, window
