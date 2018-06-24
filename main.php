<?php
header("Content-type:text/html;charset=utf8");

$m=new mysqli("localhost","suky","sukyykus","test");
$m->query("set name utf8");

$res=$m->query("select * from teachers");

for($x=0; $x<=8; $x++){
  $row=$res->fetch_assoc();
  echo '
  <tr>
    <td>'.$row['name'].'</td>
    <td>'.$row['jobTitle'].'</td>
    <td>'.$row['introduction'].'</td>
    <td>'.$row['phone'].'</td>
    <td>
    <button type="button" class="btn btn-success btn-xs ">查看</button>
      <div class="btn-group">
        <button type="button" class="btn btn-warning btn-xs " data-toggle="modal" data-target="#changeSource">修改</button>
        <button type="button" class="btn btn-danger btn-xs" data-toggle="modal" data-target="#deleteSource">删除</button>
        <button type="button" class="btn btn-default btn-xs ">添加管理员</button>
      </div>
    </td>
    </td>
  </tr>
  ';
}


 ?>
