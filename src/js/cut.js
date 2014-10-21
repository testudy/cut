/*jslint ass: false */
(function (global, $, document) {
    'use strict';
    /*
     * Cut类
     * @class Cut
     * @param {String} selector 选择器
     * @param {Object} options
     */
    function Cut(selector, options) {
        var that = this,
            pause,
            cycle;

        this.options = options;
        this.$element = $(selector);
        this.$indicators = this.$element.find('.indicators');

        if (options.pause === 'hover') {
            pause = $.proxy(this.pause, this);
            cycle = $.proxy(this.cycle, this);
            this.$element.on('touchstart', pause);
            this.$element.on('touchend', cycle);
            this.$element.on('touchcancel', cycle);
        }

        $(document).on('click.cut', '[data-cut]', function () {
            that.slide($(this).data('cut'));
        });

        this.$element.on($.support.transitionend + ' ' +
                $.support.animationstart, function () {

            that.$element.trigger('scene:entered');
        });
    }

    Cut.prototype = {
        getActiveIndex: function () {
            var selector = '.item.active';

            this.$active = this.$element.find(selector);
            this.$items = this.$active.parent().children();

            return this.$items.index(this.$active);
        },

        pause: function (e) {
            if (!e) {
                this.paused = true;
            }

            var selector = '.enter,.leave';

            if (($.support.transitionend || support.animationstart) &&
                    this.$element.find(selector).length) {

                that.$element.trigger('scene:entered');
                this.cycle(true);
            }

            global.clearInterval(this.interval);
            this.interval = null;

            return this;
        },

        cycle: function (e) {
            if (!e) {
                this.paused = false;
            }

            if (this.interval) {
                global.clearInterval(this.interval);
            }

            if (this.options.interval && !this.paused) {
                this.interval = global.setInterval($.proxy(this.next, this),
                        this.options.interval);
            }

            return this;
        },

        to: function (pos) {
            var activeIndex = this.getActiveIndex(),
                that = this,
                type;

            if (pos > (this.$items.length - 1) || pos < 0) {
                return;
            }

            if (this.sliding) {
                this.$element.one('entered', function () {
                    that.to(pos);
                });
                return this;
            }

            if (activeIndex === pos) {
                return this;
            }

            type = pos > activeIndex ? 'next' : 'prev';

            return this.slide(type, $(this.$items[pos]));
        },

        next: function () {
            if (this.sliding) {
                return this;
            }

            return this.slide('next');
        },

        prev: function () {
            if (this.sliding) {
                return this;
            }

            return this.slide('prev');
        },

        slide: function (type, next) {
            var selector = '.item.active',
                $active = this.$element.find(selector),
                // $active[type]() 利用jquery的prev和next方法
                $next = next || $active[type](),
                isCycling = this.interval,
                fallback = type === 'next' ? 'first' : 'last',
                that = this,
                e;

            this.sliding = true;

            if (isCycling) {
                this.pause();
            }

            if (!$next.length) {
                $next = this.$element.find('.item')[fallback]();
            }

            e = $.Event('enter', {
                relatedTarget: $next[0],
                direction: type
            });

            if ($next.hasClass('active')) {
                return;
            }

            if (this.$indicators.length) {
                this.$indicators.find('.active').removeClass('active');
                this.$element.one('entered', function () {
                    var index = that.getActiveIndex(),
                        $nextIndicator = that.$indicators.children().eq(index);

                    if ($nextIndicator) {
                        $nextIndicator.addClass('active');
                    }
                });
            }

            this.$element.trigger(e);
            if (e.isDefaultPrevented()) {
                return;
            }

            if ($.support.transitionend || $.support.animationstart) {
                this.$element.one('scene:entered', function () {
                    $next.removeClass('enter ' + type).addClass('active');
                    $active.removeClass('active leave ' + type);
                    that.sliding = false;
                    global.setTimeout(function () {
                        that.$element.trigger('entered');
                    }, 0);
                });
                $active.addClass(type);
                $next.addClass(type);
                $next[0].offsetWidth; //force reflow
                $active.addClass('leave');
                $next.addClass('enter');
            } else {
                $next.addClass('active');
                $active.removeClass('active');
                that.sliding = false;
                that.$element.trigger('entered');
            }

            if (isCycling) {
                this.cycle();
            }

            return this;
        }
    };

    $.fn.cut = function (option) {
        return this.each(function () {
            var $this = $(this),
                data = $this.data('data-api-cut'),
                options = $.extend({}, $.fn.cut.defaults),
                action;

            if ($.isPlainObject(option) && option) {
                $.extend(options, option);
            }

            if (typeof option === 'string') {
                action = option;
            } else {
                action = options.cut;
            }

            if (!data) {
                data = new Cut(this, options);
                $this.data('data-api-cut', data);
            }

            if (typeof option === 'number') {
                data.to(option);
            } else if (action) {
                data[action]();
            } else if (options.interval) {
                data.pause().cycle();
            }
        });
    };

    $.fn.cut.Constructor = Cut;

    $.fn.cut.defaults = {
        // 自动循环间隔
        interval: false,
        pause: 'hover'
    };
}(this, this.Zepto, this.document));
