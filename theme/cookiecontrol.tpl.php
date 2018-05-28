<div id="cccwr">
    <div id="ccc-state" class="ccc-pause">
        <div id="ccc-icon">
            <button>
                <span class="cookie-status">Cookies are <span class="ton">on</span> / <span class="toff">off</span></span>
            </button>
        </div>
        <div class="ccc-widget">
            <div class="ccc-outer">
                <div class="ccc-inner">
                    <h2><?php print t('Our website uses cookies');?></h2>
                    <div class="ccc-content">
                        <p class="ccc-intro"></p>
                        <div class="ccc-expanded"></div>

                        <div id="ccc-cookies-switch" style="background-position-x: 0;">
                          <a id="cctoggle" href="#" style="background-position-x: 0;" name="cctoggle"><span id="cctoggle-text">Cookies test</span></a>
                        </div>
                        <div class="cs-widget-advance dialog-n-others">
                          <div class="dialog-checkboxes">
                            <div id="CBDialogBodyLevelButtonsSelectPane">
                                <div id="cbdnecessary" class="cbwrapper" title="<?php print $cbdnecessary; ?>"><input type="checkbox" id="CBDialogBodyLevelButtonNecessary" class="CBDialogBodyLevelButton CBDialogBodyLevelButtonDisabled" disabled="disabled" checked="checked"><label for="CBDialogBodyLevelButtonNecessary">Necessary</label></div>
                                <div id="cbdpreferenece" class="cbwrapper" title="<?php print $cbdpreferenece; ?>"><input type="checkbox" id="CBDialogBodyLevelButtonPreferences" class="CBDialogBodyLevelButton" checked="checked" tabindex="1"><label for="CBDialogBodyLevelButtonPreferences">Preferences</label></div>
                                <div id="cbdstatistics" class="cbwrapper" title="<?php print $cbdstatistics; ?>"><input type="checkbox" id="CBDialogBodyLevelButtonStatistics" class="CBDialogBodyLevelButton" checked="checked" tabindex="1"><label for="CBDialogBodyLevelButtonStatistics">Statistics</label></div>
                                <div id="cbdmarketing" class="cbwrapper" title="<?php print $cbdmarketing; ?>"><input type="checkbox" id="CBDialogBodyLevelButtonMarketing" class="CBDialogBodyLevelButton" checked="checked" tabindex="1"><label for="CBDialogBodyLevelButtonMarketing">Marketing</label></div>
                            </div>
                          </div>
                          <div id="desc">
                            <?php print t('(One cookie will be set to store your preference)'); ?>
                          </div>
                        </div>

                        <div id="ccc-explicit-checkbox">
                          <label><input id="cchide-popup" type="checkbox" name="ccc-hide-popup" value="Y" /> <?php print t('Do not ask me again'); ?><br /></label> <?php print t('(Ticking this sets a cookie to hide this popup if you then hit close. This will not store any personal information)'); ?>
                        </div>
                        <div class="cookie-wrapper"><span class="cookie-status">Cookies are <span class="ton">on</span> / <span class="toff">off</span></span></div>
                        <button class="ccc-close" title="Close">X</button>
                    </div>
                </div>
            </div>
            <div class="cs-widget-simple"><button class="ccc-expand"><?php print t('Advanced settings');?></button></div>
            <div class="cs-widget-advance"><button class="ccc-expand"><?php print t('Simple settings');?></button></div>
        </div>
    </div>
</div>
