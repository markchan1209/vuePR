<template>

<div class="wrapper">

  <div class="mask2"></div>
  <div class="popup popup_check">
    <div class="box_title"><h4>案件查看</h4></div>
    <section>
      <div class="box_content">
        <ul class="popup_box ul_flex">
          <li class="left">
            <table class="form_inner">
              <caption>基本資料</caption>
              <tr>
                <th>身份證字號</th>
                <td>A123456789</td>
              </tr>
              <tr>
                <th>手機</th>
                <td>0912345678</td>
              </tr>
              <tr>
                <th>email</th>
                <td>xxxx@gmail.com</td>
              </tr>
              <tr>
                <th>生日</th>
                <td>1999-01-01</td>
              </tr>
              <tr>
                <th>性別</th>
                <td>男</td>
              </tr>
              <tr>
                <th>密碼更新日</th>
                <td>2020-05-05 12:34:56</td>
              </tr>
              <tr>
                <th>手機驗證狀態</th>
                <td>已驗證</td>
              </tr>
              <tr>
                <th>帳號狀態</th>
                <td>啟用</td>
              </tr>
              <tr>
                <th>帳號註冊日期</th>
                <td>2020-05-05 12:34:56</td>
              </tr>
              <tr>
                <th>最後登入時間</th>
                <td>2020-05-05 12:34:56</td>
              </tr>
              <tr>
                <th>帳號異動時間</th>
                <td>2020-05-05 12:34:56</td>
              </tr>
              <tr>
                <th>登入IP</th>
                <td>207.111.222.111</td>
              </tr>
              <tr>
                <th>從何得知</th>
                <td>網路</td>
              </tr>
              <tr>
                <th>TDID狀態</th>
                <td>驗證成功</td>
              </tr>
              <tr>
                <th>戶政紀錄</th>
                <td>驗證成功</td>
              </tr>
            </table>
          </li>
          <li class="right">
            <table class="popup_inner form_inner">
              <caption>功能</caption>
              <tr>
                <th><label>修改手機號碼</label></th>
                <td><input type="text" value="0912345678"></td>
                <td class="col_2" colspan="2"><button><span>送出</span></button></td>
              </tr>
              <tr>
                <th><label>重發OTP簡訊</label></th>
                <td><input type="text" value="發送原因"></td>
                <td class="col_2" colspan="2"><button><span>送出</span></button></td>
              </tr>
            </table>
            <table class="box_inner">
              <caption>手動改動歷程</caption>
              <tr>
                <th>
                  <ul class="ul_flex">
                    <li><span>項目</span></li>
                    <li><i class='fas fa-sort-up on'></i><!--<i class='fas fa-sort-down on'></i>--></li>
                  </ul>
                </th>
                <th>
                  <ul class="ul_flex">
                    <li><span>手機</span></li>
                    <li><i class='fas fa-sort'></i></li>
                  </ul>
                </th>
                <th>
                  <ul class="ul_flex">
                    <li><span>修改人員</span></li>
                    <li><i class='fas fa-sort'></i></li>
                  </ul>
                </th>
                <th>
                  <ul class="ul_flex">
                    <li><span>修改時間</span></li>
                    <li><i class='fas fa-sort'></i></li>
                  </ul>
                </th>
              </tr>
              <tr>
                <td>Text</td>
                <td>Text</td>
                <td>Text</td>
                <td>2022-12-11</td>
              </tr>
            </table>
            <table class="box_inner">
              <caption>OPT發動歷程</caption>
              <tr>
                <th>
                  <ul class="ul_flex">
                    <li><span>項目</span></li>
                    <li><i class='fas fa-sort-up on'></i><!--<i class='fas fa-sort-down on'></i>--></li>
                  </ul>
                </th>
                <th>
                  <ul class="ul_flex">
                    <li><span>手機</span></li>
                    <li><i class='fas fa-sort'></i></li>
                  </ul>
                </th>
                <th>
                  <ul class="ul_flex">
                    <li><span>原因</span></li>
                    <li><i class='fas fa-sort'></i></li>
                  </ul>
                </th>
                <th>
                  <ul class="ul_flex">
                    <li><span>修改人員</span></li>
                    <li><i class='fas fa-sort'></i></li>
                  </ul>
                </th>
                <th>
                  <ul class="ul_flex">
                    <li><span>修改時間</span></li>
                    <li><i class='fas fa-sort'></i></li>
                  </ul>
                </th>
              </tr>
              <tr>
                <td>Text</td>
                <td>Text</td>
                <td>Text</td>
                <td>Text</td>
                <td>2022-12-11</td>
              </tr>
            </table>
          </li>
        </ul>
      </div>
      <div class="box_text">
        <button><span>確定</span></button>
      </div>
    </section>
  </div>

  <header class="ul_flex">
    <h1>系統名稱</h1>
  	<button class="btn_menu"><i class="fas fa-bars"></i></button>
    <a helf="#">後台管理</a>
  	<button class="btn_member"><i class="i_member"></i><span>User</span><i class="fas fa-caret-down"></i></button>
    <ul class="ul_flex">
      <li><button class="btn_login"><i class="fas fa-sign-out-alt"></i><span>Sign Out</span></button></li>
    </ul>
  </header>

  <menu>
    <div>
      <a href=""><i class="i_menu"></i><span>權限管理</span></a><button class="btn_onoff fas fa-chevron-down" type="button"></button>
      <ul class="menu_onoff ul_flex">
        <li class="on"><a href="#">帳號申請功能</a><button class="fas fa-caret-right" type="button"></button></li>
        <li><a href="#">角色申請功能</a><button class="fas fa-caret-right" type="button"></button></li>
        <li><a href="#">軟體功能權限管理</a><button class="fas fa-caret-right" type="button"></button></li>
      </ul>
    </div>
    <div>
      <a href=""><i class=""></i><span>分類標題</span></a><button class="btn_onoff fas fa-chevron-down" type="button"></button>
      <ul class="menu_onoff ul_flex">
        <li><a href="#">功能標題</a><button class="fas fa-caret-right" type="button"></button></li>
        <li><a href="#">功能標題</a><button class="fas fa-caret-right" type="button"></button></li>
        <li><a href="#">功能標題</a><button class="fas fa-caret-right" type="button"></button></li>
      </ul>
    </div>
  </menu>

  <main>
    <div class="main_title ul_flex">
      <h2>會員資料管理查詢</h2>
    </div>
    <div class="main_inner">
      <ul class="search_inner ul_flex">
        <li>
          <label>姓名</label><br>
          <input type="text">
        </li>
        <li>
          <label>手機</label><br>
          <input type="text">
        </li>
        <li>
          <label>身分證字號</label><br>
          <input type="text">
        </li>
        <li>
          <label>從何得知</label><br>
          <select>
            <option>FB</option>
          </select>
        </li>
      </ul>
      <ul class="search_inner ul_flex">
        <li>
          <label>使用時間起／訖</label><br>
          <input type="date">
          <input type="date">
        </li>
        <li><button><i class='fas fa-search'></i><span>查詢</span></button></li>
        <li><button class="btn_none"><i class="fas fa-times"></i><span>清除</span></button></li>
      </ul>
      <section>
        <ul class="box_title ul_flex">
          <li><h4>會員資料管理清單</h4></li>
          <li><i class='fas fa-angle-up'></i></li>
        </ul>
        <ul class="box_search ul_flex">
          <li>
            顯示
            <select>
              <option>10</option>
            </select>
            筆
          </li>
          <li><input class="i_search" type="text" placeholder="搜尋"></li>
        </ul>
        <table class="box_inner">
          <tr>
            <th>
              <ul class="ul_flex">
                <li><span>姓名</span></li>
                <li><i class='fas fa-sort-up on'></i><!--<i class='fas fa-sort-down on'></i>--></li>
              </ul>
            </th>
            <th>
              <ul class="ul_flex">
                <li><span>身分證字號</span></li>
                <li><i class='fas fa-sort'></i></li>
              </ul>
            </th>
            <th>
              <ul class="ul_flex">
                <li><span>手機</span></li>
                <li><i class='fas fa-sort'></i></li>
              </ul>
            </th>
            <th width="120">
              <ul class="ul_flex">
                <li><span>註冊日期</span></li>
                <li><i class='fas fa-sort'></i></li>
              </ul>
            </th>
            <th>
              <ul class="ul_flex">
                <li><span>從何得知</span></li>
                <li><i class='fas fa-sort'></i></li>
              </ul>
            </th>
            <th>
              <ul class="ul_flex">
                <li><span>修改人員</span></li>
                <li><i class='fas fa-sort'></i></li>
              </ul>
            </th>
            <th width="120">
              <ul class="ul_flex">
                <li><span>修改日期</span></li>
                <li><i class='fas fa-sort'></i></li>
              </ul>
            </th>
            <th width="100">
              <ul class="ul_flex">
                <li><span>動作</span></li>
                <li><i class='fas fa-sort'></i></li>
              </ul>
            </th>
          </tr>
          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>2022-12-11</td>
            <td><button class="btn_check"><span>查看</span></button></td>
          </tr>
          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>2022-12-11</td>
            <td><button><span>查看</span></button></td>
          </tr>
          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>2022-12-11</td>
            <td><button><span>查看</span></button></td>
          </tr>
          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>2022-12-11</td>
            <td><button><span>查看</span></button></td>
          </tr>
          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>2022-12-11</td>
            <td><button><span>查看</span></button></td>
          </tr>
          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>2022-12-11</td>
            <td><button><span>查看</span></button></td>
          </tr>
          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>2022-12-11</td>
            <td><button><span>查看</span></button></td>
          </tr>
          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>2022-12-11</td>
            <td><button><span>查看</span></button></td>
          </tr>
          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>2022-12-11</td>
            <td><button><span>查看</span></button></td>
          </tr>
          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>2022-12-11</td>
            <td><button><span>查看</span></button></td>
          </tr>
        </table>
        <p class="box_text ">顯示第1筆至第10筆，共有26筆。</p>
        <div class="box_page ul_flex">
          <span>上一頁</span>
          <a helf="" class="active">1</a>
          <a helf="">2</a>
          <a helf="">3</a>
          <a helf="">下一頁</a>
        </div>
      </section>
    </div><!--main_inner-->
  </main>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'MemberInfo',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>
