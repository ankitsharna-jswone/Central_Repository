fetch("https://qtmcloud.qmetry.com/rest/api/ui/gadgets/TESTCASE_SUMMARY_BY_WORKFLOW_STATUS", {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "authorization": "jwt eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3MTIwMjA6ODJhNWFjZTUtMmVhZC00YTg1LTliZWUtN2I1OTQzMWY2MmYzIiwicXNoIjoiY29udGV4dC1xc2giLCJpc3MiOiI5MjJhZTg4NC0wY2U5LTNmNjAtOWIwNy1lNTIzNDlmY2QzODkiLCJjb250ZXh0Ijp7ImxpY2Vuc2UiOnsiYWN0aXZlIjp0cnVlfSwidXJsIjp7ImRpc3BsYXlVcmwiOiJodHRwczpcL1wvanN3b25lLmF0bGFzc2lhbi5uZXQiLCJkaXNwbGF5VXJsU2VydmljZWRlc2tIZWxwQ2VudGVyIjoiaHR0cHM6XC9cL2pzd29uZS5hdGxhc3NpYW4ubmV0In0sImppcmEiOnsicHJvamVjdCI6eyJrZXkiOiJTRiIsImlkIjoiMTAwOTAifX19LCJleHAiOjE3MzM0ODkzMTAsImlhdCI6MTczMzQ4ODQxMH0.qgyLMu6VEEi179zFrQCXQfeCbVkrYDBLFn3XWmWgIrE",
      "content-type": "application/json",
      "locale": "en_US",
      "location": "Report_TESTCASE_SUMMARY_BY_WORKFLOW_STATUS_Generate_Clicked",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Google Chrome\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "timezone": "Asia/Calcutta",
      "Referer": "https://qtmcloud.qmetry.com/",
      "Referrer-Policy": "origin"
    },
    "body": "{\"projectIds\":[10090,10004,10056,10103,10105,10137,10104,10128],\"qql\":\"testcase.assignee = '712020:82a5ace5-2ead-4a85-9bee-7b59431f62f3' AND testcase.includearchive = false\",\"customFieldQQL\":[\"testcase.qcf_1109912.optionvalue = '4748180'\",\"testcase.qcf_1109911.optionvalue = '4748178'\",\"testcase.qcf_1109915.optionvalue = '4748186'\",\"testcase.qcf_1109918.optionvalue = '4748210'\",\"testcase.qcf_1109913.optionvalue = '4748182'\",\"testcase.qcf_1109914.optionvalue = '4748184'\",\"testcase.qcf_1122054.optionvalue = '4780021'\"],\"defectJql\":null,\"requirementJql\":null}",
    "method": "POST"
  });