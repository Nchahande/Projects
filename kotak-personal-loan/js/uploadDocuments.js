$(function () {
    $('.uploadDocument').change(function(e){
        var previewName = $(this)[0].name;
        var childNo = $('.'+previewName).children().length;
        var fileNo = $(this)[0].files.length;

        if((fileNo > 3) || ((parseInt(childNo)+parseInt(fileNo)) > 3)){
            console.log('Max limit 3');
            return false;
        }else if (parseInt(childNo)+parseInt(fileNo) == 3){
            $(this).parent('.upload_btn').css('display', 'none');
        }

        if(fileNo == 3){
            $(this).parent('.upload_btn').css('display', 'none');
        }
        
        if($('.'+previewName).children().length==2){
            $(this).parent('.upload_btn').css('display', 'none');
        }

        if (typeof (FileReader) != "undefined") {
            var regex = /^([a-zA-Z0-9\s_\\.\-:])+(.jpg|.jpeg|.png|.pdf)$/;
            $($(this)[0].files).each(function () {
                var file = $(this);
                if (regex.test(file[0].name.toLowerCase())) {
                    var reader = new FileReader();
                    reader.onload = function (j) {
                        var filename = e.target.files[0].name;
                        var extension = filename.replace(/^.*\./, '');
                        var size = e.target.files[0].size;
                        extension = extension.toLowerCase();
                        if(extension == 'pdf'){
                            var imgPath = '<img src="img/pdf-icon.svg" class="img-fluid imgSrc">';
                        }else{
                            var imgPath = '<img src="'+j.target.result+'" class="img-fluid imgSrc">';
                        }
                        var fSExt = new Array('Bytes', 'kb', 'mb', 'gb'),
                        i=0;while(size>900){size/=1024;i++;}
                        var exactSize = (Math.round(size*100)/100)+' '+fSExt[i];
                        var html = '<div class="upload_details_container d-flex mt-3">\
                        <div class="image-icon">'+imgPath+'</div>\
                        <div class="file-details">\
                            <h5 class="fileBold">'+filename+'</h5>\
                            <h6>'+exactSize+'</h6>\
                            <p class="fileRemove" data-parent="'+previewName+'">Delete</p>\
                        </div>\
                    </div>';
                        
                    $("."+previewName).append(html);

                    $('.fileRemove').click(function(){
                        $(this).parent().parent('.upload_details_container').remove();
                        if($('.'+$(this).data('parent')).children().length<=2){
                            $('.'+$(this).data('parent')).prev('.upload_btn_container').find('.upload_btn').css('display', 'flex');
                        }
                    });
                    }
                    reader.readAsDataURL(file[0]);
                } else {
                    alert(file[0].name + " is not a valid image file.");
                    dvPreview.html("");
                    return false;
                }
            });
        } else {
            alert("This browser does not support HTML5 FileReader.");
        }
        
        $('.btnProceed').removeClass('disabled');
        
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