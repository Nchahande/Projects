$(function () {
    $('#bankStatement').change(function(e){
        var filename = e.target.files[0].name;
        var extension = filename.replace(/^.*\./, '');
        var size = $(this)[0].files[0].size;
        extension = extension.toLowerCase();
        var fSExt = new Array('Bytes', 'kb', 'mb', 'gb'),
        i=0;while(size>900){size/=1024;i++;}
        var exactSize = (Math.round(size*100)/100)+' '+fSExt[i];
        $(this).parent().parent('.upload_btn_container').next('.upload_details_container').find('.imgSrc').attr('src', 'img/'+extension+'-icon.svg');
        $(this).parent().parent('.upload_btn_container').next('.upload_details_container').find('h5').html(filename);
        $(this).parent().parent('.upload_btn_container').next('.upload_details_container').find('h6').html(exactSize);
        $(this).parent().parent('.upload_btn_container').css('display', 'none');
        $(this).parent().parent('.upload_btn_container').next('.upload_details_container').css('display', 'flex');
        $(this).parent().parent('.upload_btn_container').next('.upload_details_container').next('.upload_progress_container').css('display', 'flex');
        $('.btnProceed').removeClass('disabled');
        if(extension == 'pdf'){
            $("#bankstatementModal").modal('show'); 
        }
    });

    $('.file-delete').click(function(){
        $(this).parent('.upload_details_container').css('display', 'none');
        $(this).parent('.upload_details_container').next('.upload_progress_container').css('display', 'none');
        $(this).parent('.upload_details_container').prev('.upload_btn_container').css('display', 'block');
        $('.btnProceed').addClass('disabled');
    });
    
    $('.progress-block').css('width', $('.progress-block').data('value')+'%');
    $('.progress-status').html($('.progress-block').data('value')+'% Completed');

    
});