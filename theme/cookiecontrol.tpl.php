<div id="cccwr">
    <div id="ccc-state" class="ccc-pause">
        <div id="ccc-icon">
            <button>
                <span><?php print t('Our website uses cookies');?></span>
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
                        <div id="CBDialogBodyLevelButtonsSelectPane">
                            <div class="cbwrapper" title="Mandatory - can not be deselected. Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies."><input type="checkbox" id="CBDialogBodyLevelButtonNecessary" class="CBDialogBodyLevelButton CBDialogBodyLevelButtonDisabled" disabled="disabled" checked="checked"><label for="CBDialogBodyLevelButtonNecessary">Necessary</label></div>
                            <div class="cbwrapper" title="Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in."><input type="checkbox" id="CBDialogBodyLevelButtonPreferences" class="CBDialogBodyLevelButton" checked="checked" tabindex="1"><label for="CBDialogBodyLevelButtonPreferences">Preferences</label></div>
                            <div class="cbwrapper" title="Statistic cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously."><input type="checkbox" id="CBDialogBodyLevelButtonStatistics" class="CBDialogBodyLevelButton" checked="checked" tabindex="1"><label for="CBDialogBodyLevelButtonStatistics">Statistics</label></div>
                            <div class="cbwrapper" title="Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers."><input type="checkbox" id="CBDialogBodyLevelButtonMarketing" class="CBDialogBodyLevelButton" checked="checked" tabindex="1"><label for="CBDialogBodyLevelButtonMarketing">Marketing</label></div>
                        </div>

                        <div id="ccc-implicit-warning">
                          <?php print t('(One cookie will be set to store your preference)'); ?>
                        </div>

                        <div id="ccc-explicit-checkbox">
                          <label><input id="cchide-popup" type="checkbox" name="ccc-hide-popup" value="Y" /> <?php print t('Do not ask me again'); ?><br /></label> <?php print t('(Ticking this sets a cookie to hide this popup if you then hit close. This will not store any personal information)'); ?>
                        </div>
                        <button class="ccc-close"><?php print t('Close');?></button>
                    </div>
                </div>
            </div>
            <button class="ccc-expand"><?php print t('advance');?></button>
        </div>
    </div>
</div>
