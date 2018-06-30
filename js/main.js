window.onload = function() {
  var left = new Vue({
    el: "#left",
    data: {
      role_id: 2,
      user: {
        userName: '11',
        professionTitle: '22',
        introduction: '33',
        phone: '44',
      },
    },
    // computed: {
    //   userMsg: function() {
    //     var that = this;
    //     axios.get('/api/user/id')
    //       .then(function(response) {
    //         if (response.data.code == 0) {
    //           that.role_id = response.data.data.role_id;
    //           that.user.userName = response.data.data.userName;
    //           that.user.professionTitle = response.data.data.professionTitle;
    //           that.user.introduction = response.data.data.introduction;
    //           that.user.phone = response.data.data.phone;
    //         } else {
    //           alert(response.data.msg)
    //         }
    //       })
    //       .catch(function(error) {
    //         console.log(error);
    //       });
    //   }
    // },
  });
  var right = new Vue({
    el: "#teachers",
    data: {
      role_id: 1,
      userName: '',
      professionTitle: '',
      introduction: '',
      phone: '',
      checkTeachers:{},
      teachers: [{
          user_id: 1,
          userName: 'yyqx',
          professionTitle: '偶像',
          introduction: 'ashfahs gjkahgjkhasjkl',
          phone: '12345678901',
          role_id: 1
        },
        {
          user_id: 2,
          userName: '易烊千玺',
          professionTitle: '偶像',
          phone: '12345678901',
          role_id: 2
        },
      ]
    },
    // computed: {
    //   teachersMsg: function() {
    //     var that = this;
    //     axios.get('/api/allUser')
    //       .then(function(response) {
    //         if (response.data.code == 0) {
    //           for (var i = 0; i < response.data.teachers.leight; i++) {
    //             that.teachers[i].user_id = response.data.teachers.user_id;
    //             that.teachers[i].userName = response.data.teachers.userName;
    //             that.teachers[i].professionTitle = response.data.teachers.professionTitle;
    //             that.teachers[i].introduction = response.data.teachers.introduction;
    //             that.teachers[i].phone = response.data.teachers.phone;
    //             that.teachers[i].role_id = response.data.teachers.role_id;
    //           }
    //         } else {
    //           alert(response.data.msg)
    //         }
    //       })
    //       .catch(function(error) {
    //         console.log(error);
    //       });
    //   },
    // },
    methods: {
      checkUser: function(a) {
        var that = this;
        axios.get('/api/user/a')
          .then(function(response) {
            if (response.data.code == 0) {
              that.userName = response.data.data.userName;
              that.professionTitle = response.data.data.professionTitle;
              that.introduction = response.data.data.introduction;
              that.phone = response.data.data.phone;
            } else {
              alert(response.data.msg)
            }
          })
          .catch(function(error) {
            console.log(error);
          });
       },
      checkTeachers: function() {
        console.log("123")
        this.checkTeachers=b;
      },
      // deleteTeachers: function() {
      //   var that = this;
      //   axios.get('/api/user/b')
      //     .then(function(response) {
      //       if (response.data.code == 0) {
      //         alert(response.data.msg);
      //         teachersMsg();
      //       } else {
      //         alert(response.data.msg)
      //       }
      //     })
      //     .catch(function(error) {
      //       console.log(error);
      //     });
      // },
      // role: function() {
      //   var that = this;
      //   axios.get('/api/user/b')
      //     .then(function(response) {
      //       if (response.data.code == 0) {
      //         alert(response.data.msg);
      //         teachersMsg();
      //       } else {
      //         alert(response.data.msg)
      //       }
      //     })
      //     .catch(function(error) {
      //       console.log(error);
      //     });
      // },
    },
  });

}
