jQuery(document).ready(function () {
  var m_yysm_fieldid = WfForm.convertFieldNameToId("xgfj"); //原因说明
  WfForm.setTextFieldEmptyShowContent(
    m_yysm_fieldid,
    "提交人民法院寄送的所有文书，如传票、举证通知书、起诉状、证据等，文件格式支持PDF/JPG/MP3。",
  );
  var m_yysm_fieldid = WfForm.convertFieldNameToId("ahn"); //原因说明
  WfForm.setTextFieldEmptyShowContent(m_yysm_fieldid, "（2022）");
  var m_yysm_fieldid = WfForm.convertFieldNameToId("ah"); //原因说明
  WfForm.setTextFieldEmptyShowContent(m_yysm_fieldid, "沪0115民初00001号");

  var rowCount = WfForm.getDetailRowCount("detail_1"); /*获取明细1总行数*/
  for (var rowIndex = 0; rowIndex < rowCount; rowIndex++) {
    WfForm.setTextFieldEmptyShowContent(
      "field50098_" + rowIndex,
      "自然人姓名或公司全称",
    );
  }
  WfForm.registerAction(WfForm.ACTION_ADDROW + "1", function (index) {
    WfForm.setTextFieldEmptyShowContent(
      "field50098_" + index + "",
      "自然人姓名或公司全称",
    );
  });
  var rowCount = WfForm.getDetailRowCount("detail_2"); /*获取明细2总行数*/
  for (var rowIndex = 0; rowIndex < rowCount; rowIndex++) {
    WfForm.setTextFieldEmptyShowContent(
      "field61947_" + rowIndex,
      "自然人姓名或公司全称",
    );
  }
  WfForm.registerAction(WfForm.ACTION_ADDROW + "2", function (index) {
    WfForm.setTextFieldEmptyShowContent(
      "field61947_" + index + "",
      "自然人姓名或公司全称",
    );
  });
  var rowCount = WfForm.getDetailRowCount("detail_3"); /*获取明细3总行数*/
  for (var rowIndex = 0; rowIndex < rowCount; rowIndex++) {
    WfForm.setTextFieldEmptyShowContent(
      "field61949_" + rowIndex,
      "自然人姓名或公司全称",
    );
  }
  WfForm.registerAction(WfForm.ACTION_ADDROW + "3", function (index) {
    WfForm.setTextFieldEmptyShowContent(
      "field61949_" + index + "",
      "自然人姓名或公司全称",
    );
  });

  var dsrlx = WfForm.convertFieldNameToId("dsrlx", "detail_1"); //当事人类型id
  var dsrxm = WfForm.convertFieldNameToId("dsrxm", "detail_1"); //当事人姓名id
  var dsrlx2 = WfForm.convertFieldNameToId("dsrlx", "detail_2"); //当事人类型id
  var dsrxm2 = WfForm.convertFieldNameToId("dsrxm", "detail_2"); //当事人姓名id
  var dsrlx3 = WfForm.convertFieldNameToId("dsrlx", "detail_3"); //当事人类型id
  var dsrxm3 = WfForm.convertFieldNameToId("dsrxm", "detail_3"); //当事人姓名id

  var ajmc = WfForm.convertFieldNameToId("ajmc"); //案件名称id
  var yg = ModeForm.convertFieldNameToId("ygssrsqr"); //原告id
  var bg = ModeForm.convertFieldNameToId("bgbssrbsqr"); //被告id
  var dsr = ModeForm.convertFieldNameToId("dsr"); //第三人id

  WfForm.registerCheckEvent(
    WfForm.OPER_SAVE + "," + WfForm.OPER_SUBMIT,
    function (callback) {
      var sj = WfForm.convertFieldNameToId("sj"); //审级id
      var sjvalue = WfForm.getSelectShowName(sj); //sj
      var sjvalue2 = WfForm.getFieldValue(sj);
      var ay = WfForm.convertFieldNameToId("ay"); //案由id
      var ayvalue = WfForm.getFieldValue(ay);
      var casename = ""; //案件名称
      var yuangao = ""; //原告
      var beigao = ""; //被告
      var disanren = ""; //第三人
      /***获取原告明细表拼接***/
      var rowArr1 = WfForm.getDetailAllRowIndexStr("detail_1").split(",");
      for (var i = 0; i < rowArr1.length; i++) {
        var rowIndex1 = rowArr1[i];
        if (rowIndex1 !== "") {
          var dsrlxMark = dsrlx + "_" + rowIndex1; //当事人类型标识
          var dsrxmMark = dsrxm + "_" + rowIndex1; //当事人姓名标识
          var dsrlxValue = WfForm.getSelectShowName(dsrlxMark); //获取当事人类型显示值
          var dsrxmValue = WfForm.getFieldValue(dsrxmMark); //获取当事人类型显示值
          if (yuangao.length == 0) {
            yuangao = dsrxmValue;
          } else if (yuangao.length > 0) {
            yuangao = yuangao + "," + dsrxmValue;
          }
        }
      }
      if (yuangao.length > 0) {
        yuangao = "“" + yuangao + "”";
      }

      /***获取被告明细表拼接***/
      var rowArr2 = WfForm.getDetailAllRowIndexStr("detail_2").split(",");
      for (var i = 0; i < rowArr2.length; i++) {
        var rowIndex2 = rowArr2[i];
        if (rowIndex2 !== "") {
          var dsrlxMark2 = dsrlx2 + "_" + rowIndex2; //当事人类型标识
          var dsrxmMark2 = dsrxm2 + "_" + rowIndex2; //当事人姓名标识
          var dsrlxValue2 = WfForm.getSelectShowName(dsrlxMark2); //获取当事人类型显示值
          var dsrxmValue2 = WfForm.getFieldValue(dsrxmMark2); //获取当事人类型显示值
          if (beigao.length == 0) {
            beigao = dsrxmValue2;
          } else if (beigao.length > 0) {
            beigao = beigao + "," + dsrxmValue2;
          }
        }
      }
      if (beigao.length > 0) {
        beigao = "“" + beigao + "”";
      }

      /***获取第三人明细表拼接***/
      var rowArr3 = WfForm.getDetailAllRowIndexStr("detail_3").split(",");
      for (var i = 0; i < rowArr3.length; i++) {
        var rowIndex3 = rowArr3[i];
        if (rowIndex3 !== "") {
          var dsrlxMark3 = dsrlx3 + "_" + rowIndex3; //当事人类型标识
          var dsrxmMark3 = dsrxm3 + "_" + rowIndex3; //当事人姓名标识
          var dsrlxValue3 = WfForm.getSelectShowName(dsrlxMark3); //获取当事人类型显示值
          var dsrxmValue3 = WfForm.getFieldValue(dsrxmMark3); //获取当事人类型显示值
          if (disanren.length == 0) {
            disanren = dsrxmValue3;
          } else if (disanren.length > 0) {
            disanren = disanren + "," + dsrxmValue3;
          }
        }
      }
      if (disanren.length > 0) {
        disanren = "“" + disanren + "”";
      }
      var anyou = "";
      var shenji = "";
      if (ayvalue.length > 0) {
        anyou = "“" + ayvalue + "”";
      }
      if (sjvalue.length > 0) {
        shenji = "“" + sjvalue + "”";
      }
      if (sjvalue2 < 2) {
        casename = yuangao + "诉" + beigao + disanren + anyou;
      } else if (sjvalue2 > 1) {
        casename = yuangao + "诉" + beigao + disanren + anyou + shenji;
      }
      /*alert(casename);*/
      WfForm.changeFieldValue(ajmc, { value: casename });
      ModeForm.changeFieldValue(yg, { value: yuangao });
      ModeForm.changeFieldValue(bg, { value: beigao });
      ModeForm.changeFieldValue(dsr, { value: disanren });
      callback(); //继续提交需调用callback，不调用代表阻断
    },
  );
});



