var CheckPhotoOrder = new Class({
    Extends: PreSaveHook,

    confirm_text: 'Вы проверили сортировку фотографий?',

    get_widget: function(){
        return $(this.frm.id  + '.photos_edit').retrieve('widget');
    },

    get_require_check: function(){
        var order = JSON.stringify(this.widget.state.value);
        var count = this.widget.state.value.length;
        return count > 1 && order != this.init_order;
    },

    after_init: function(){
        this.init_order = JSON.stringify(this.widget.state.value);
    }
});

var CheckMainPhoto = new Class({
    Extends: PreSaveHook,

    confirm_text: 'Вы выбрали главную фотографию?',

    get_widget: function(){
        return $(this.frm.id + '.photos_edit').retrieve('widget');
    },

    get_require_check: function(){
        var count = this.widget.state.value.length;
        var mainPhoto = this.widget.getMainWidget().state.value.text;
        return count > 1 && mainPhoto == '';
    },

});
