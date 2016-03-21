// Global Variables
jsGlobalColorRateUp				=	'#0FD634';
jsGlobalColorRateDown			=	'#ED093F';
jsGlobalColorRateUnchanged		=	'transparent';
jsGlobalDataStreamingOffHTML	=	"<div class='cl_stream_off' >Data Streaming is <span style='color:#E35E1B'>off... </span> </div>";
jsGlobalUserVisitURL="http://local_vardhamanbullion/dynamic/vbPGUpdateMobileUserVisitCount.php";
jsGlobalJsonpUrl = 'http://local_vardhamanbullion/dynamic/vbPgGetMobileRatesDynGet.php';
//jsGlobalUserVisitURL="http://www.vardhamanbullion.com/dynamic/vbPGUpdateMobileUserVisitCount.php";
//jsGlobalJsonpUrl = 'http://www.vardhamanbullion.com/dynamic/vbPgGetMobileRatesDynGet.php';		


function initApp()
{
	$('#id_btn_updateapp').css("display", "none");

	// Update VB Mobile User Visit Count
	jsVBAjaxUdpateUserVisitCount();
	
	// Load Rates	
	jsMobRefVBRates();	
}

function jsVBAjaxUdpateUserVisitCount()
{
	var jsParams;
	jsParams = "";
	jsParams = jsParams + "TOKEN=DUMMY";
	

	$.ajax({type:						"GET", 
					async:				"true",
					url:					jsGlobalUserVisitURL,
					dataType: 		"jsonp",
					data: 				jsParams,
					crossDomain:	true,          
					cache:				false, 
					contentType: 	"application/json; charset=utf-8",
					dataType: 		"jsonp",
					jsonp: 				"callback",
					jsonpCallback: 	"jsVBProcessMobileJSONPResult",					
					success: 			onAjaxVBMobileUserVisitSuccess,
					error: 				onAjaxVBMobileUserVisitError
		});				

}	//jsVBAjaxUdpateUserVisitCount

function onAjaxVBMobileUserVisitSuccess( jsResult)
{
	// Do Nothing
}

function onAjaxVBMobileUserVisitError( jsXhrObj )
{
	// Do Nothing
}


function jsVBProcessMobileJSONPResult( jsonData )
{
	// Do Nothing
}


function jsMobRefVBRates()
{
	var jsTime;
	jsMobUpdVBRates();
	jsTime = setTimeout("jsMobRefVBRates()",3000);   // 3.0 Second	

}


function jsMobUpdVBRates()
{
   // Local data declarations
	var jsCurrGoldBid, jsCurrGoldAsk, jsCurrSilverBid, jsCurrSilverAsk;
	var jsToday, jsCurrYear, jsCurrMonth, jsCurrDate;
	var jsCurrMonthStr, jsUTCDateStr;
	var jsURL, jsParamStr;
	
	//------- Format current UTC Date start -------->	
	jsToday = new Date();
	jsCurrYear 		= jsToday.getUTCFullYear();
	jsCurrMonth		= jsToday.getUTCMonth();
	jsCurrDate		= jsToday.getUTCDate();
	
	// Format Month
	jsCurrMonth = jsCurrMonth + 1;	
	if( jsCurrMonth < 10 )
	{
		jsCurrMonthStr = '0' + jsCurrMonth.toString();
	}
	else
	{
		jsCurrMonthStr = jsCurrMonth;
	}
	
	// Format Day
	if(jsCurrDate < 10)
	{
		jsCurrDateStr = '0' + jsCurrDate.toString();
	}
	else
	{
		jsCurrDateStr = jsCurrDate;
	}
	
	jsUTCDateStr = jsCurrYear.toString() + jsCurrMonthStr.toString() + jsCurrDateStr.toString();
	//------- Format current UTC Date end -------->	
	 	
	// Get Hidden values
	var jsCurrParam1,  jsCurrParam2, jsCurrParam3, jsCurrParam4, jsCurrParam5;
	var jsCurrParam6,  jsCurrParam7, jsCurrParam8, jsCurrParam9, jsCurrParam10;
	
	jsCurrParam1 		   = document.getElementById('id_hid_mob_param1').value;
	jsCurrParam2 		    = document.getElementById('id_hid_mob_param2').value;
	jsCurrParam3			= document.getElementById('id_hid_mob_param3').value;
	jsCurrParam4			= document.getElementById('id_hid_mob_param4').value;
	jsCurrParam5			= document.getElementById('id_hid_mob_param5').value;
	jsCurrParam6			= document.getElementById('id_hid_mob_param6').value;
	jsCurrParam7			= document.getElementById('id_hid_mob_param7').value;
	jsCurrParam8			= document.getElementById('id_hid_mob_param8').value;
	jsCurrParam9			= document.getElementById('id_hid_mob_param9').value;
	jsCurrParam10			= document.getElementById('id_hid_mob_param10').value;
	
	jsParamStr='';
	jsParamStr = jsParamStr + 'PIN=' + jsUTCDateStr;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P001=' + jsCurrParam1;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P002=' + jsCurrParam2;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P003=' + jsCurrParam3;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P004=' + jsCurrParam4;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P005=' + jsCurrParam5;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P006=' + jsCurrParam6;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P007=' + jsCurrParam7;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P008=' + jsCurrParam8;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P009=' + jsCurrParam9;
	jsParamStr = jsParamStr + '&';
	jsParamStr = jsParamStr + 'P010=' + jsCurrParam10;
	
	
	$.ajax({type:						"GET", 
					async:				"true",
					url:					jsGlobalJsonpUrl,
					dataType: 		"jsonp",
					data: 				jsParamStr,
					crossDomain:	true,          
					cache:				false, 
					contentType: 	"application/json; charset=utf-8",
					dataType: 		"jsonp",
					jsonp: 				"callback",
					jsonpCallback: 	"jsProcessJSONPResult",					
					success: 			onAjaxMobGetRatesSuccess,
					error: 				onAjaxMobGetRatesError
		});			
	
	
}

function onAjaxMobGetRatesSuccess(  jsResult )
{

}

function onAjaxMobGetRatesError()
{
	//-- Do not Output Streaming Off HTML becasue this will impace users witl slow internet connection
	//-- Screen will be switching between 'no data' and 'live data'
	/*
		var jsGridDivObj;
		jsGridDivObj	=	document.getElementById("id_div_grid_outer");
		jsGridDivObj.innerHTML = jsGlobalDataStreamingOffHTML;
	*/
}

function jsProcessJSONPResult( jsonData )
{
	
	var  jsKey, jsAct,  jsFlag, jsCode, jsDesc, jsKeyVal1;
	var jsCsym, jsDesc1, jsDesc2, jsAsk, jsDir;
	var jsSpace, jsGridDivObj;
	var jsDataBKColor;
	var jsLine1, jsLine2;
	var jsHidFieldId;
	
	jsSpace = "&nbsp;";
	jsKey		= 	jsonData.RESULT[0].KEY;
	jsFlag		= 	jsonData.RESULT[0].FLAG;
	jsDesc		= 	jsonData.RESULT[0].DESC;

	jsGridDivObj	=	document.getElementById("id_div_grid_outer");

	
	if( jsFlag == 'E' )
	{
		// This will clear the Grid
		jsGridDivObj.innerHTML = jsGlobalDataStreamingOffHTML;

	}
	else if( jsFlag == 'S' )
	{
	
		//alert( jsonData.RESULT[0].PARAMS.length );
		var jsIndex;
		for (var i = 1; i <= jsonData.RESULT[0].PARAMS.length; i++)
		{
			jsIndex = i - 1;
			jsKeyVal1 =	jsonData.RESULT[0].PARAMS[jsIndex];
			jsKeyArr	=	jsKeyVal1.split('~');
			if( jsKeyArr[0] == "APPUPDATE" && jsKeyArr[1] == "Y" )
			{
					$('#id_btn_updateapp').css("display", "block");
			}
			else
			{
				$('#id_btn_updateapp').css("display", "none");
			}
		}	

		
		
		
		jsGridDivObj.innerHTML = "";
		for (var i=1; i< jsonData.RESULT.length; i++)
		{
			jsKey 		=	jsonData.RESULT[i].KEY;
			jsAct			=	jsonData.RESULT[i].ACT;
			jsDesc1	= 	jsonData.RESULT[i].DESC1;
			jsDesc2	=	jsonData.RESULT[i].DESC2;
			jsCsym		=	jsonData.RESULT[i].CSYM;
			jsAsk		=	jsonData.RESULT[i].ASK;
			jsDir			=	jsonData.RESULT[i].DIR;
		
			if( jsAct == 'Y' )
			{
				jsLine1	=	"<div class='ui-block-a cl_td_label' >" 
								+ jsDesc1 
								+ "&nbsp;<span class='cl_td_label_2'>"
								+ jsDesc2
								+ "</span></div>";
						
				//------- Direction -------->		
				if( jsDir == "-1" )
				{					
					jsDataBKColor = jsGlobalColorRateDown;
				}
				else if( jsDir == "1" )
				{					
					jsDataBKColor = jsGlobalColorRateUp;
				}
				else
				{
					jsDataBKColor = jsGlobalColorRateUnchanged;
				}							
				
				/*
				//---- Currency symbol
				var jsCsymLine;
				if( jsCsym == "R" )
				{
					
					jsCsymLine = "<SPAN class='WebRupee cl_exch_rupee' name='name_span_symbol' >Rs.</span>";
					
				}
				else if( jsCsym == 'D' )
				{
					jsCsymLine = "<span  class='cl_exch_dollar'> $ </span>";
				}
				*/
				
				jsLine2	=	"<div class='ui-block-b cl_td_data' style='background-color: " + jsDataBKColor + " '> "
								//+ jsCsymLine
								+ jsAsk
								+ "</div>";
								
				jsGridDivObj.innerHTML +=	jsLine1.toString() + jsLine2.toString();
				
				
				//---- Update Hidden fields --------->
				jsHidFieldId = 'id_hid_mob_param' + i.toString();
				document.getElementById(jsHidFieldId).value	=	jsAsk;
				
				
			
			}			// End check for jsAct
			
			
		}			// End for loop JSON loop
	}				// Check for Success flag
		
	
	
	
}		// End function - jsProcessJSONPResult
