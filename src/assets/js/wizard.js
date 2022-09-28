$(document).ready(function () {

    var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn'),
        allBackBtn = $('.backBtn'),
        oneClick = $('.text-left'),
        twoClick = $('.text-right');


    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
            $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-success').addClass('btn-default');
            $item.addClass('btn-success');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function () {
        $(".text-left").addClass("classleft");
        $(".text-right").addClass("classright");
        $(".stepwizard-row.setup-panel").addClass("classpanel");
        
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");
        for (var i = 0; i < curInputs.length; i++) {
            if (!curInputs[i].validity.valid) {
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid) nextStepWizard.removeAttr('disabled').trigger('click');
    });

    allBackBtn.click(function(){
        $(".text-right").removeClass("classright");
        $(".text-left").removeClass("classleft");
        $(".stepwizard-row.setup-panel").removeClass("classpanel");
        $('#step-2').css('display', 'none');
        $('#step-1').css('display', 'block');
    })

    allBackBtn.click(function(){
        $(".text-right").removeClass("classright");
        $(".text-left").removeClass("classleft");
        $(".stepwizard-row.setup-panel").removeClass("classpanel");
        $('#step-2').css('display', 'none');
        $('#step-1').css('display', 'block');
    })

    twoClick.click(function(){
        $(".stepwizard-row.setup-panel").addClass("classpanel");
    })

    oneClick.click(function(){
        $(".stepwizard-row.setup-panel").removeClass("classpanel");
        $(".text-right").removeClass("classright");
    })

    $('div.setup-panel div a.btn-success').trigger('click');
});