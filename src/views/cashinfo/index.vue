<template>


<div class="wrapper">

  <div class="mask2"></div>
  <div class="popup popup_check">
    <div class="box_title"><h4>案件查看</h4></div>
    <section>
      <div class="box_content">
        <ul class="popup_box ul_flex">
          <li class="top">
            <div class="tabs_box ul_flex">
              <button class="on">案件資訊</button>
              <button>交易歷程</button>
            </div>
          </li>
          <li class="left">
            <table class="form_inner">
              <caption>基本資料</caption>
              <tr>
                <th>審編</th>
                <td>******</td>
              </tr>
              <tr>
                <th>身份證字號</th>
                <td>A123456789</td>
              </tr>
              <tr>
                <th>分期金額</th>
                <td>70,000</td>
              </tr>
            </table>
            <table class="form_inner">
              <caption>進件來源</caption>
              <tr>
                <th>進件來源</th>
                <td>消費者平台</td>
              </tr>
              <tr>
                <th>代碼</th>
                <td>XXX</td>
              </tr>
            </table>
            <table class="form_inner">
              <caption>進件來源</caption>
              <tr>
                <th>案件狀態</th>
                <td>已收件</td>
              </tr>
              <tr>
                <th>請款狀態</th>
                <td>未核准</td>
              </tr>
              <tr>
                <th>電子簽章狀態</th>
                <td>尚未執行</td>
              </tr>
            </table>
            <table class="form_inner">
              <caption>通路商資料</caption>
              <tr>
                <th>代碼</th>
                <td>已收件</td>
              </tr>
              <tr>
                <th>名稱</th>
                <td>未核准</td>
              </tr>
              <tr>
                <th>統編</th>
                <td>12345678</td>
              </tr>
              <tr>
                <th>據點代碼</th>
                <td>XXX</td>
              </tr>
              <tr>
                <th>據點名稱</th>
                <td>OOO</td>
              </tr>
              <tr>
                <th>據點聯絡人電話</th>
                <td>0987654321</td>
              </tr>
              <tr>
                <th>據點聯絡人</th>
                <td>QQQ</td>
              </tr>
            </table>
          </li>
          <li class="right">
            <table class="popup_inner form_inner">
              <caption>通路商資料</caption>
              <tr>
                <th><label>分期金額</label></th>
                <td><input type="text" value="70,000" disabled></td>
                <th></th>
                <td></td>
              </tr>
              <tr>
                <th><label>月付款</label></th>
                <td><input type="text" value="6667/6666" disabled></td>
                <th><label>期數</label></th>
                <td><input type="text" value="1/23" disabled></td>
              </tr>
              <tr>
                <th><label>名稱</label></th>
                <td><input type="text" value="國產機車" disabled></td>
                <th><label>手續費</label></th>
                <td><input type="text" value="5,000" disabled></td>
              </tr>
              <tr>
                <th><label>數量</label></th>
                <td><input type="text" value="1" disabled></td>
                <th><label>型號規格</label></th>
                <td><input type="text" value="gogoro" disabled></td>
              </tr>
            </table>
            <table class="popup_inner form_inner">
              <caption>專案資料</caption>
              <tr>
                <th><label>專案代號</label></th>
                <td><input type="text" value=""></td>
                <th><label>專案類別</label></th>
                <td><input type="text" value="消金專案"></td>
              </tr>
              <tr>
                <th><label>業務別代碼</label></th>
                <td><input type="text" value=""></td>
                <th></th>
                <td></td>
              </tr>
              <tr>
                <th><label>專案描述</label></th>
                <td colspan="3"><textarea></textarea></td>
              </tr>
            </table>
            <table class="popup_inner form_inner">
              <caption>基本資料</caption>
              <tr>
                <th><label>中文姓名</label></th>
                <td><input type="text" value="郭大大" disabled></td>
                <th><label>身分證字號</label></th>
                <td><input type="text" value="A123456789" disabled></td>
              </tr>
              <tr>
                <th><label>出生日期</label></th>
                <td><input type="text" value="1999-01-11" disabled></td>
                <th><label>手續費</label></th>
                <td><input type="text" value="" disabled></td>
              </tr>
              <tr>
                <th><label>戶籍電話</label></th>
                <td><input type="text" value="03-2222222" disabled></td>
                <th><label>通訊電話</label></th>
                <td><input type="text" value="03-2222222" disabled></td>
              </tr>
              <tr>
                <th><label>行動電話</label></th>
                <td><input type="text" value="0987654321" disabled></td>
                <th></th>
                <td></td>
              </tr>
              <tr>
                <th><label>戶籍地址</label></th>
                <td colspan="3">
                  <input type="text" class="add_1" value="700" disabled>
                  <input type="text" class="add_2" value="台北市" disabled>
                  <input type="text" class="add_2" value="中正區" disabled>
                  <input type="text" class="add_3" value="忠孝西路一段XX號" disabled>
                </td>
              </tr>
              <tr>
                <th><label>通訊地址</label></th>
                <td colspan="3">
                  <input type="text" class="add_1" value="郵遞區號" disabled>
                  <input type="text" class="add_2" value="台北市" disabled>
                  <input type="text" class="add_2" value="中正區" disabled>
                  <input type="text" class="add_3" value="忠孝西路一段XX號" disabled>
                </td>
              </tr>
            </table>
            <table class="popup_inner form_inner">
              <caption>職業資料</caption>
              <tr>
                <th><label>服務單位</label></th>
                <td><input type="text" value="OO公司" disabled></td>
                <th><label>公司電話</label></th>
                <td><input type="text" value="03-2222222" disabled></td>
              </tr>
            </table>
            <table class="popup_inner form_inner">
              <caption>銀行資料</caption>
              <tr>
                <th><label>撥款帳戶戶名</label></th>
                <td><input type="text" value="" disabled></td>
                <th><label>撥款帳戶ID</label></th>
                <td><input type="text" value="" disabled></td>
              </tr>
              <tr>
                <th><label>撥款帳戶銀行代碼</label></th>
                <td><input type="text" value="" disabled></td>
                <th><label>撥款帳戶銀行<br>分行代碼</label></th>
                <td><input type="text" value="" disabled></td>
              </tr>
              <tr>
                <th><label>撥款帳戶帳號</label></th>
                <td colspan="3"><input type="text" value="" disabled></td>
              </tr>
            </table>
            <table class="popup_inner form_inner">
              <caption>連帶保證人資料</caption>
              <tr>
                <th><label>中文姓名</label></th>
                <td><input type="text" value="" disabled></td>
                <th><label>身分證字號</label></th>
                <td><input type="text" value="" disabled></td>
              </tr>
              <tr>
                <th><label>出生日期</label></th>
                <td><input type="date" value="" disabled></td>
                <th><label>聯絡電話</label></th>
                <td><input type="text" value="" disabled></td>
              </tr>
              <tr>
                <th><label>戶籍地址</label></th>
                <td colspan="3">
                  <input type="text" class="add_1" value="郵遞區號" disabled>
                  <input type="text" class="add_2" value="縣市" disabled>
                  <input type="text" class="add_2" value="行政區" disabled>
                  <input type="text" class="add_3" value="地址" disabled>
                </td>
              </tr>
            </table>
          </li>
        </ul>
      </div>
      <div class="box_text">
        <button><span>儲存</span></button>
        <button class="btn_r"><span>取消</span></button>
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
      <h2>案件紀錄查詢</h2>
      <button class="btn_plus"><i class="fas fa-plus"></i><span>新增資料</span></button>
    </div>
    <div class="main_inner">
      <ul class="search_inner ul_flex">
        <li>
          <label>進件時間起／訖</label><br>
          <input type="date">
          <input type="date">
        </li>
        <li>
          <label>審編</label><br>
          <input type="text">
        </li>
        <li>
          <input type="checkbox" name="ur_role" id="checkboxa" checked="checked">
          <label for="checkboxa"><i></i><span>無審編</span></label>
        </li>
      </ul>
      <ul class="search_inner ul_flex">
        <li>
          <label>身分證字號</label><br>
          <input type="text">
        </li>
        <li>
          <label>進件來源</label><br>
          <select>
            <option>全部</option>
          </select>
        </li>
        <li><button><i class='fas fa-search'></i><span>查詢</span></button></li>
        <li><button class="btn_none"><i class="fas fa-times"></i><span>清除</span></button></li>
      </ul>
      <section>
        <ul class="box_title ul_flex">
          <li><h4>案件清單</h4></li>
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
                <li><span>審件編號</span></li>
                <li><i class='fas fa-sort-up on'></i><!--<i class='fas fa-sort-down on'></i>--></li>
              </ul>
            </th>
            <th>
              <ul class="ul_flex">
                <li><span>姓名</span></li>
                <li><i class='fas fa-sort'></i></li>
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
                <li><span>進件來源</span></li>
                <li><i class='fas fa-sort'></i></li>
              </ul>
            </th>
            <th>
              <ul class="ul_flex">
                <li><span>代碼</span></li>
                <li><i class='fas fa-sort'></i></li>
              </ul>
            </th>
            <th>
              <ul class="ul_flex">
                <li><span>案件狀態</span></li>
                <li><i class='fas fa-sort'></i></li>
              </ul>
            </th>
            <th>
              <ul class="ul_flex">
                <li><span>請款狀態</span></li>
                <li><i class='fas fa-sort'></i></li>
              </ul>
            </th>
            <th>
              <ul class="ul_flex">
                <li><span>電子簽章狀態</span></li>
                <li><i class='fas fa-sort'></i></li>
              </ul>
            </th>
            <th>
              <ul class="ul_flex">
                <li><span>案件送出時間</span></li>
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
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td><button class="btn_check"><span>查看</span></button></td>
          </tr>
          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td><button><span>查看</span></button></td>
          </tr>
          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td><button><span>查看</span></button></td>
          </tr>
          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td><button><span>查看</span></button></td>
          </tr>
          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td><button><span>查看</span></button></td>
          </tr>
          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td><button><span>查看</span></button></td>
          </tr>
          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td><button><span>查看</span></button></td>
          </tr>
          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td><button><span>查看</span></button></td>
          </tr>
          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td><button><span>查看</span></button></td>
          </tr>
          <tr>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
            <td>Text</td>
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
  name: 'CashInfo',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>
