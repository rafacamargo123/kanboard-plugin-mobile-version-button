MobileVersionButton = function() {
    this.strings = $('.mobile-version-button-strings').data();
};

MobileVersionButton.prototype.execute = function() {
    this.render();
};

MobileVersionButton.prototype.render = function() {
    var self = this;
    window.isMobile.any = self.isMobile();

    var button = '<a href="#" class="js-switch-view"><i class="fa fa-' + (self.isMobile() ? 'desktop' : 'tablet') + ' fa-fw" aria-hidden="true"></i></a>&nbsp;';

    $('.menus-container').prepend(button);

    $('.js-switch-view').click(function(e) {
        e.preventDefault();
        self.toggle();
        window.location.reload();
    }).attr("title", self.isMobile() ? self.strings.stringDesktop : self.strings.stringMobile)
}

MobileVersionButton.prototype.isMobile = function() {
    var storageValue = localStorage.getItem('mobile-view');

    if (storageValue == null)
        return window.isMobile.any;
    return localStorage.getItem('mobile-view') == '1';
};

MobileVersionButton.prototype.toggle = function() {
    var self = this;
    localStorage.setItem('mobile-view', (self.isMobile() ? '0' : '1'));
};

var _mobileVersionButton = new MobileVersionButton();
_mobileVersionButton.execute();
