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
        var that=this;
        axios.get('/api/user/a')
          .then(function(response) {
            if (response.data.code == 0) {
              that.userName = response.data.data.userName;
              that.professionTitle = response.data.data.professionTitle;
              that.introduction=response.data.data.introduction;
              that.phone=response.data.data.phone;
            } else {
              alert(response.data.msg)
            }
          })
          .catch(function(error) {
            console.log(error);
          });
      },
    },
  });
}
