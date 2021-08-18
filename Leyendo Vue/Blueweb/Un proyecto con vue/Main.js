const Josue = new Vue({
    

    el: '#Josue',

    data: {
        titulo: 'Vue',
        tarea: [],
        nuevaTarea: ''
    },
    methods: {
        agregarTarea: function () {
           this.tarea.push({
                nombre: this.nuevaTarea,
                estado : false
            });
   
            this.nuevaTarea = ''
        },
        
        editarTarea: function (Alomi) {
            this.tarea[Alomi].estado = true;
        }
    }

})

