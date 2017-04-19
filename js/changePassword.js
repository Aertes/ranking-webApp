
$(document).ready(function(){                
        $("#oldpassword").blur(function(){
                var param=$("#oldpassword").val();
                $.ajax({
                    url:" ",
                    data:{oldpassword:param},                 
                    success:function(e){
                        if(e.code==1){                            
                             $("#tip1").html("<p class=\"text\"  color=\"green\" size=\"2\">  密码输入正确</p>");
                        } 
                        else{                                 
                            $("#tip1").html("<p class=\"text\"  color=\"red\" size=\"2\">  请输入正确的密码</p>");
                        }
                    }                 
                });
           });
          $("#newpassword").blur(function(){
              var num=$("#newpassword").val().length;
              if(num<6){
                   $("#tip2").html("<p  class=\"text\" color=\"red\" size=\"2\">  too short</p>");                
              }
              else if(num>18){
                   $("#tip2").html("<p  class=\"text\" color=\"red\" size=\"2\">  too long</p>");                 
              }
              else{
                  $("#tip2").html("<p  class=\"text\" color=\"green\" size=\"2\"> Accept</p>");                
              }
          }) ;
          $("#setpassword").blur(function(){
              var tmp=$("#newpassword").val();
              var num=$("#setpassword").val().length;
              if($("#setpassword").val()!=tmp){
                  $("#tip3").html("<p class=\"text\" color=\"red\" size=\"2\">  输入的密码不一致</p>");                 
              }
              else{
                  if(num>=6&&num<=18){
                      $("#tip3").html("<p class=\"text\" color=\"green\" size=\"2\">  输入的密码一致</p>");                    
                  }                 
                  else{
                      $("#tip3").html("<p class=\"text\" color=\"red\" size=\"2\">  输入的密码不一致</p>");                           
                  }                
              }
          });
              $("#btn").click(function(){
                  var flag=true;
                  var old=$("#oldpassword").val();
                  var pass=$("#newpassword").val();
                  var pass2=$("#setpassword").val();
                  var num1=$("#newpassword").val().length;
                  var num2=$("#setpassword").val().length;
                  if(num1!=num2||num1<6||num2<6||num1>18||num2>18||pass!=pass2){
                      flag=false;
                  }
                  else{
                      flag=true;
                  }
                  if(flag){                   
                  $.ajax({
                      url:"",
                      data:{oldpassword:old,password:pass},
                      success:function(e){                         
                          if(e.code==1){
                              $("#tip4").show().html("<p class=\"text\" color=\"green\" size=\"3\">  Edit Success!</p>");
                              $("#oldpassword").val("");
                              $("#newpassword").val("");
                              $("#setpassword").val("");
                              $("#tip1").empty();
                              $("#tip2").empty();
                              $("#tip3").empty();
                              $("#tip4").delay(2000).hide(0);        
                          }
                          else{
                              $("#tip4").show().html("<p class=\"text\" color=\"red\" size=\"3\">  OldPassword is Wrong!</p>");
                          }                                     
                         }
                  });
              }
              else{
                  
                  $("#tip4").show().html("<p class=\"text\" color=\"red\" size=\"3\">  Please follow the tips!</p>");
              }
              });                  
        });