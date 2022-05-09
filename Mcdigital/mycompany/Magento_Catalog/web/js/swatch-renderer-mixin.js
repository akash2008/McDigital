/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery'
], function ($) {
    'use strict';

    return function (swatchRenderer) {
        $.widget('mage.SwatchRenderer', swatchRenderer, {
            updateBaseImage: function (images, context, isInProductView) {
                var justAnImage = images[0];
                if (isInProductView) {
                    // new code for replace images only for detail page.
                    var imageCount = 0;
                    $.each(images, function () {
                        $('#md_products_slider_' + imageCount).attr('src', this.img);
                        imageCount++;
                    })
                } else if (justAnImage && justAnImage.img) {
                    context.find('.product-image-photo').attr('src', justAnImage.img);
                }
            }
        });

        return $.mage.SwatchRenderer;
    };
});
