window.onload = function() {
  new Vue({
    el: "#teachers",
    data: {
        roleId : 1,
        userName: '',
        professionTitle: '',
        introduction: '',
        phone: '',
      teachers: [{
          user_id: 1,
          userName: 'yyqx',
          professionTitle: '偶像',
          introduction: 'ashfahs gjkahgjkhasjkl',
          phone: '12345678901',
          roleId: 1
        },
        {
          user_id: 2,
          userName: '易烊千玺',
          professionTitle: '偶像',
          phone: '12345678901',
          roleId: 2
        },
        {},
        {},
        {},
      ]
    },
    methods: {
      checkUser: function(a) {
        axios.get('/api/user/a')
          .then(function(response) {
            if (response.code == 0) {
              this.userName = response.data.userName;
              this.professionTitle = response.data.professionTitle;
              this.introduction=response.data.introduction;
              this.phone=response.data.phone;
            } else {
              alert(response.msg)
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      },
    },
  });
}
