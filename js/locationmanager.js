$(document).ready(function(){
    
    var location = {
        locationList: [
            'База отдыха \"Шарада\"',
            'База отдыха \"Маяк\"',
            'Гостиничный комплекс \"Липовый рай\"',
            'Комплекс спортивных сооружений \"Укртатнафта\"',
            'Пляжный клуб \"CityClub\"',
            'Спортивный комплекс \"Балу\"',
            'Клуб \"Мисто\"',
            'База отдыха \"Чайка\"'
        ],
        addedLocations: 0,
        deletedLocations: 0,
        locationHistory: [],
        addLocation: function(addName) {
            location.locationList.unshift(addName);
            $('#list').empty();
            for (var i = 0; i < location.locationList.length; i++) {
                $('#list').append(('<li class=\"list-group-item\"><i class=\"material-icons\">clear</i>'+location.locationList[i]+'</li>'));
            }
            this.addedLocations += 1;
            $('#quantAddLoc').text('Добавленных локаций: ' + this.addedLocations);
            var now = new Date();
            location.locationHistory.unshift('Локация '+addName+' добавлена '+now.toLocaleString());
            fillHistory();   
        },
        deleteLocation: function(delName) {
            delName.parent().remove();
            this.deletedLocations += 1;
            $('#quantDelLoc').text('Удаленных локаций: '+this.deletedLocations);
            location.locationList.splice(delName.index(), 1);
            var now = new Date();     
            location.locationHistory.unshift('Локация '+ delName.parent().text().substr(5)+' удалена '+now.toLocaleString());
            fillHistory();         
        },
        deleteAllLocation: function() {
            if (this.locationList.length > 0) {
                $('#list').empty();
                this.deletedLocations += location.locationList.length;
                $('#quantDelLoc').text('Удаленных локаций: '+this.deletedLocations);
                location.locationList = [];
                var now = new Date();
                location.locationHistory.unshift('Все локации удалены '+now.toLocaleString());        
                fillHistory(); 
            }    
        }
    };
    
    for (var i = 0; i < location.locationList.length; i++) {
        $('#list').append(('<li class=\"list-group-item\"><i class=\"material-icons\">clear</i>'+location.locationList[i]+'</li>'));
    }
    
    $('#addLoc').click(function() {
        
        var addName = $('#inputLoc').val();
        $('#info').remove();
        
        if (addName == 0) {
            $('#error').text('Недопустимое значение');       
        } else {
            $('#error').text('');
            location.addLocation(addName);
        }              
    });
    
    $('#delAllLoc').click(function() {         
        $('#info').remove();   
        location.deleteAllLocation();     
    });
    
    $(document).on( "click", "#list > li > i", function() {
        $('#info').remove();
        location.deleteLocation($(this));    
    });
    
    function fillHistory(){
         $('#history').empty();
            for (var i = 0; i < location.locationHistory.length; i++) {
                $('#history').append(('<li class=\"list-group-item\">'+location.locationHistory[i]+'</li>'));
         }
    };    
});


