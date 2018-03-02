var Cat = function () {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Alex');
    this.imgSrc = ko.observable('img/cat1.jpg');
    this.imgAttribution = ko.observable('Cute');
    this.nicknames = ko.observableArray(['AA', 'BB', 'CC', 'DD']);

    this.title = ko.computed(function () {
            var title;
            var clicks = this.clickCount();
            if (clicks < 3) {
                title = 'NewBorn';
            }
            else if (clicks < 6) {
                title = 'Infant';
            }
            else if (clicks < 10) {
                title = 'Child';
            }
            else {
                title = 'Adult';
            }
            return title;
        }, this
    );
};

var ViewModel = function () {
    var self = this;
    this.currentCat = ko.observable(new Cat());
    this.incrementCounter = function () {
        self.currentCat().clickCount(self.currentCat().clickCount() + 1);
    };
};
ko.applyBindings(new ViewModel());
