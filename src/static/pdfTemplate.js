module.exports = ({ name, lastname, result }) => {
    const today = new Date();
return `
<!doctype html>
<html>
        <!doctype html>
        <html>
        
        <head>
           <meta charset="utf-8">
           <title>Ruvita Сертификат</title>
           <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
           <style>
           a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}:focus{outline:0}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none;-moz-appearance:none}input[type=search]{-webkit-appearance:none;-moz-appearance:none;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box}textarea{overflow:auto;vertical-align:top;resize:vertical}audio,canvas,video{display:inline-block;max-width:100%}audio:not([controls]){display:none;height:0}[hidden]{display:none}html{font-size:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}a:focus{outline:thin dotted}a:active,a:hover{outline:0}img{border:0;-ms-interpolation-mode:bicubic}figure{margin:0}form{margin:0}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0;white-space:normal}button,input,select,textarea{font-size:100%;margin:0;vertical-align:baseline}button,input{line-height:normal}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=search]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}textarea{overflow:auto;vertical-align:top}table{border-collapse:collapse;border-spacing:0}button,html,input,select,textarea{color:#222}::-moz-selection{background:#b3d4fc;text-shadow:none}::selection{background:#b3d4fc;text-shadow:none}img{vertical-align:middle}fieldset{border:0;margin:0;padding:0}textarea{resize:vertical}.chromeframe{margin:.2em 0;background:#ccc;color:#000;padding:.2em 0}
           body{
                font-family: 'Roboto', sans-serif;
                position:relative;
           }
              .invoice-box {
                 padding: 30px;
                 font-size: 16px;
                 font-family: 'Roboto', sans-serif;
                 color: #555;
                 width:100%;
                 position: relative;
              }
        
              .margin-top {
                 margin-top: 50px;
              }
           </style>
        </head>
        
        <body>
           <div class="invoice-box">
              <div style="display: block; width: 97%; position: absolute;" >
              <svg 
              style=" height: 410px; display: block; margin: auto; opacity: .05;"" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                 x="0px" y="0px" viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve">
                 <g>
                    <g>
                       <polygon style="fill:#FFE100;"
                          points="220.863,383.017 289.137,383.017 289.137,340.344 220.863,340.344" />
                       <path style="fill:#FFE100;" d="M255,306.207c-8.765,0-17.325-0.887-25.603-2.569v36.707h51.207v-36.707
               C272.325,305.319,263.765,306.207,255,306.207z" />
                       <path style="fill:#FFE100;" d="M255,306.207L255,306.207c-70.699,0-128.017-57.317-128.017-128.016V41.639h256.033v136.551
               C383.017,248.889,325.699,306.207,255,306.207" />
                    </g>
                    <path style="fill:#FFA800;" d="M357.413,41.639v136.551c0,66.373-50.524,120.95-115.215,127.367
            c4.208,0.427,8.483,0.649,12.802,0.649c70.699,0,128.017-57.317,128.017-128.016V41.639H357.413z" />
                    <path style="fill:#FFFFFF;" d="M152.587,41.639v136.551c0,66.373,50.524,120.942,115.215,127.376
            c-4.208,0.418-8.483,0.64-12.802,0.64c-70.699,0-128.017-57.317-128.017-128.016V41.639H152.587z" />
                    <path style="fill:#FFE100;" d="M383.017,41.639H126.984c-9.422,0-17.069-7.647-17.069-17.069s7.647-17.068,17.069-17.068h256.033
            c9.422,0,17.069,7.647,17.069,17.069S392.439,41.639,383.017,41.639" />
                    <path style="fill:#FFA800;" d="M383.017,7.501h-25.603c9.422,0,17.069,7.647,17.069,17.069s-7.647,17.069-17.069,17.069h25.603
            c9.422,0,17.069-7.647,17.069-17.069S392.439,7.501,383.017,7.501" />
                    <path style="fill:#FFFFFF;" d="M126.984,7.501h25.603c-9.422,0-17.069,7.647-17.069,17.069s7.647,17.069,17.069,17.069h-25.603
            c-9.422,0-17.069-7.647-17.069-17.069S117.561,7.501,126.984,7.501" />
                    <polygon style="fill:#FFA800;" points="255,109.914 268.186,138.01 297.673,144.052 276.336,164.381 280.603,195.258 255,180.681 
            229.397,195.258 233.664,164.381 212.328,144.052 241.814,138.01 	" />
                    <path style="fill:#FFE100;" d="M323.276,417.154H186.724v-17.069c0-9.422,7.647-17.069,17.069-17.069h102.413
            c9.422,0,17.069,7.647,17.069,17.069L323.276,417.154L323.276,417.154z" />
                    <path style="fill:#FFA800;" d="M306.207,383.017h-25.603c9.422,0,17.069,7.647,17.069,17.069v17.068h25.603v-17.069
            C323.276,390.664,315.629,383.017,306.207,383.017" />
                    <path style="fill:#FFFFFF;" d="M203.793,383.017h25.603c-9.422,0-17.069,7.647-17.069,17.069v17.068h-25.603v-17.069
            C186.724,390.664,194.371,383.017,203.793,383.017" />
                    <path style="fill:#FFE100;" d="M340.344,502.498H169.656v-68.276c0-9.422,7.647-17.069,17.069-17.069h136.551
            c9.422,0,17.069,7.647,17.069,17.069v68.276H340.344z" />
                    <path style="fill:#FFA800;" d="M323.276,417.154h-25.603c9.422,0,17.069,7.647,17.069,17.069v68.276h25.603v-68.276
            C340.344,424.801,332.697,417.154,323.276,417.154" />
                    <path style="fill:#FFFFFF;" d="M186.724,417.154h25.603c-9.422,0-17.069,7.647-17.069,17.069v68.276h-25.603v-68.276
            C169.656,424.801,177.302,417.154,186.724,417.154" />
                    <path d="M323.275,425.655H186.724c-4.695,0-8.501-3.806-8.501-8.501v-17.068c0-14.1,11.47-25.569,25.57-25.569h102.413
            c14.1,0,25.569,11.47,25.569,25.569v17.068C331.776,421.849,327.97,425.655,323.275,425.655z M195.225,408.653h119.548v-8.567
            c0-4.725-3.844-8.567-8.567-8.567H203.793c-4.725,0-8.568,3.843-8.568,8.567V408.653z" />
                    <path d="M340.344,511H169.655c-4.695,0-8.501-3.806-8.501-8.501v-68.276c0-14.1,11.47-25.57,25.57-25.57h136.551
            c14.1,0,25.569,11.471,25.569,25.57v68.276C348.845,507.194,345.039,511,340.344,511z M178.156,493.998h153.687v-59.775
            c0-4.725-3.843-8.568-8.567-8.568H186.724c-4.725,0-8.568,3.844-8.568,8.568V493.998z" />
                    <path d="M203.793,476.862h-34.138c-4.695,0-8.501-3.806-8.501-8.501c0-4.695,3.806-8.501,8.501-8.501h34.138
            c4.695,0,8.501,3.806,8.501,8.501C212.295,473.055,208.488,476.862,203.793,476.862z" />
                    <path d="M340.344,459.792h-34.137c-4.695,0-8.501-3.806-8.501-8.501c0-4.695,3.806-8.501,8.501-8.501h34.137
            c4.695,0,8.501,3.807,8.501,8.501C348.845,455.986,345.039,459.792,340.344,459.792z" />
                    <path d="M289.138,391.518h-68.276c-4.695,0-8.501-3.806-8.501-8.501v-42.673c0-4.695,3.806-8.501,8.501-8.501h68.276
            c4.695,0,8.501,3.806,8.501,8.501v42.672C297.64,387.711,293.833,391.518,289.138,391.518z M229.363,374.515h51.274v-25.67h-51.274
            L229.363,374.515L229.363,374.515z" />
                    <path d="M255,314.708c-75.277,0-136.518-61.242-136.518-136.518V41.639c0-4.695,3.806-8.501,8.501-8.501h256.033
            c4.695,0,8.501,3.806,8.501,8.501v136.551C391.518,253.466,330.276,314.708,255,314.708z M135.485,50.14v128.05
            c0,65.901,53.614,119.515,119.515,119.515s119.515-53.615,119.515-119.515V50.14H135.485z" />
                    <path d="M280.602,348.845h-51.207c-4.695,0-8.501-3.806-8.501-8.501v-36.706c0-2.551,1.146-4.968,3.121-6.582
            c1.976-1.615,4.574-2.257,7.072-1.749c15.678,3.185,32.145,3.185,47.823,0c2.499-0.508,5.097,0.134,7.071,1.749
            c1.976,1.614,3.121,4.031,3.121,6.582v36.706C289.103,345.039,285.298,348.845,280.602,348.845z M237.898,331.843h34.204V313.64
            c-11.336,1.419-22.869,1.419-34.204,0L237.898,331.843L237.898,331.843z" />
                    <path d="M383.017,50.14H126.984c-14.099,0-25.569-11.47-25.569-25.569C101.413,10.47,112.885-1,126.984-1h256.033
            c14.1,0,25.569,11.47,25.569,25.57C408.586,38.669,397.115,50.14,383.017,50.14z M126.984,16.002c-4.725,0-8.567,3.843-8.567,8.568
            s3.843,8.567,8.567,8.567h256.033c4.725,0,8.567-3.843,8.567-8.567s-3.844-8.568-8.567-8.568H126.984z" />
                    <path d="M134.483,229.543c-1.047,0-2.103-0.193-3.113-0.591c-23.652-9.315-43.84-25.295-58.381-46.213
            c-14.904-21.443-22.783-46.625-22.783-72.824V75.777c0-4.695,3.806-8.501,8.501-8.501h68.276c4.695,0,8.501,3.806,8.501,8.501
            V178.19c0,13.454,2.358,26.913,7.011,40.005c1.116,3.14,0.294,6.642-2.101,8.958C138.779,228.715,136.65,229.543,134.483,229.543z
             M67.209,84.278v25.636c0,39.705,20.711,75.404,54.021,95.2c-1.827-8.909-2.748-17.914-2.748-26.925V84.277L67.209,84.278
            L67.209,84.278z" />
                    <path
                       d="M375.517,229.543c-2.166,0-4.297-0.828-5.911-2.389c-2.396-2.316-3.217-5.819-2.101-8.959
            c4.652-13.09,7.011-26.549,7.011-40.005V75.776c0-4.695,3.806-8.501,8.501-8.501h68.276c4.695,0,8.501,3.806,8.501,8.501v34.138
            c0,26.199-7.878,51.382-22.783,72.823c-14.54,20.918-34.728,36.898-58.38,46.213C377.619,229.349,376.564,229.543,375.517,229.543z
             M391.518,84.278v93.912c0,9.012-0.921,18.016-2.747,26.925c33.31-19.797,54.021-55.495,54.021-95.2V84.278H391.518z" />
                    <path style="fill:#141110;" d="M280.601,203.759c-1.447,0-2.897-0.369-4.206-1.113l-21.397-12.183l-21.398,12.183
            c-2.814,1.601-6.293,1.466-8.973-0.349c-2.68-1.815-4.098-4.996-3.654-8.203l3.67-26.563l-18.182-17.325
            c-2.291-2.183-3.18-5.459-2.307-8.5c0.873-3.042,3.364-5.348,6.464-5.983l25.309-5.187l11.374-24.235
            c1.4-2.983,4.4-4.89,7.696-4.89l0,0c3.296,0,6.296,1.905,7.695,4.89l11.374,24.235l25.309,5.187
            c3.101,0.635,5.592,2.94,6.465,5.983c0.873,3.042-0.016,6.317-2.307,8.5l-18.184,17.325l3.671,26.563
            c0.443,3.207-0.974,6.387-3.654,8.203C283.934,203.269,282.27,203.759,280.601,203.759z M229.966,149.115l9.562,9.111
            c1.979,1.886,2.931,4.61,2.557,7.318l-1.906,13.793l10.615-6.044c2.608-1.484,5.804-1.483,8.413,0l10.613,6.044l-1.905-13.793
            c-0.374-2.708,0.577-5.433,2.557-7.318l9.563-9.111l-13.556-2.777c-2.629-0.539-4.85-2.287-5.989-4.717l-5.49-11.697l-5.49,11.697
            c-1.14,2.429-3.36,4.178-5.989,4.717L229.966,149.115z" />
                 </g>
              </svg>
           </div>
              <div style="font-size: .5em; color: rgba(0, 0, 0, .35);">Дата выдачи сертификата:${`${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}.`}</div>
              <h1 style="text-align:center; font-size: 2em;">Поздравляем!</h1>
              <h2 style="font-size: 1.5em; text-align:center;">${name} ${lastname} <br> прошел начальное обучение Рувита с результатом ${result}%
              </h2>
           </div>
           <div id="logo" style="max-width:100px;"> 
           <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
           viewBox="0 0 167 52" enable-background="new 0 0 167 52" xml:space="preserve">
   <g>
          <path fill="#FF3C42" d="M163.1,52H3.9C1.8,52,0,50.2,0,48.1V3.9C0,1.8,1.8,0,3.9,0h159.2c2.2,0,3.9,1.8,3.9,3.9v44.2
                  C167,50.2,165.2,52,163.1,52z"/>
          <g>
                  <path fill="#FFFFFF" d="M13.1,37.9c0.4-0.2,1-0.4,1.8-0.5c0.8-0.1,1.5-0.3,2.1-0.5c0.1-0.3,0.1-0.5,0.1-0.7c0-0.2,0-0.9,0-2.2
                          l0-5.1l0.1-2.8l0-2.1l0-1.2c0-1.7,0.1-3.2,0.1-4.7c0-3.2,0-5.2-0.1-6.1l-1.4-0.3c-1.2-0.1-2.1-0.2-2.5-0.2l0-1.4l0.1-0.3
                          c0.8-0.1,1.5-0.2,2.1-0.2c0.4,0,1.1,0,2.1,0c1.1,0.1,1.7,0.1,1.8,0.1l1.2-0.1l2.9-0.1c1.8-0.2,3.7-0.3,5.7-0.3
                          c3.2,0,5.7,0.8,7.5,2.4s2.8,3.4,2.8,5.5c0,1.5-0.5,2.9-1.5,4.2c-1,1.3-2.5,2.2-4.6,2.9c0.2,0.3,0.4,0.7,0.7,1.1
                          c0.6,0.9,1.2,1.7,1.6,2.3l3.7,5.9c0.9,1.6,1.5,2.5,1.8,2.8c0.3,0.3,0.9,0.6,1.8,0.9c0.7,0.3,1.2,0.5,1.6,0.8
                          c0.1,0.3,0.1,0.5,0.1,0.7c0,0.1,0,0.3,0,0.5h-0.6l-0.5,0l-1.2-0.2h-0.9c-0.5-0.1-1.1-0.1-1.8-0.1l-2.3,0c-0.2,0-0.7,0.1-1.6,0.2
                          c-0.4,0-0.7,0.1-1,0.1L34,37.9c-0.6-1.1-1.1-2-1.4-2.6c-0.7-1.5-1.8-3.8-3.5-7.1c-0.8-1.5-1.3-2.3-1.6-2.5
                          c-0.5-0.3-1.3-0.5-2.4-0.5c-0.3,0-0.8,0-1.6,0c0,0.4-0.1,1-0.1,1.6l0.1,5.1l-0.1,4.3c0.4,0.3,1,0.5,1.7,0.6
                          c1.2,0.2,2.2,0.5,3.1,0.9c0,0.8,0,1.3-0.1,1.7c-0.3,0-0.5,0-0.6,0l-0.9,0c-3.3-0.3-5.3-0.4-5.9-0.4c-0.4,0-0.7,0-0.9,0l-3.2,0.2
                          c-1,0.1-1.9,0.2-2.7,0.2h-1c0-0.4,0-0.6,0-0.7C13.1,38.5,13.1,38.2,13.1,37.9z M23.5,23.1c0.7,0,1.3,0,1.6,0
                          c2.6,0,4.5-0.5,5.6-1.4c1.1-0.9,1.6-2.2,1.6-3.7c0-1-0.1-1.9-0.4-2.7c-0.3-0.8-0.6-1.5-1-1.9c-0.6-0.6-1.3-1-2.2-1.4
                          c-0.7-0.2-1.8-0.3-3.2-0.3c-0.7,0-1.3,0-1.8,0.1l0,0.4l0,3.1l-0.1,1.9l0,2.5c0,0.7-0.1,1.6-0.1,2.7V23.1z"/>
                  <path fill="#FFFFFF" d="M44.3,20.8c0.2-0.1,0.3-0.1,0.4-0.1h6.9l0.5,0l0,1.5l-0.1,2.2l0,1.2l0,3.5v2.4c0,1.5,0.1,2.8,0.3,3.6
                          c0.2,0.7,0.6,1.2,1.1,1.5s1.1,0.5,1.9,0.5c0.7,0,1.3-0.1,1.7-0.2c0.4-0.1,0.9-0.4,1.5-0.8c0.6-0.4,0.9-0.7,1.1-0.8
                          c0.4-0.5,0.8-0.9,0.9-1.4l0.2-5.7c0-0.6,0-1.1,0-1.5c0-0.4,0-0.9,0-1.5c0-0.6,0-0.9,0-1l0-0.8l0-0.5c-0.4-0.2-0.9-0.4-1.5-0.4
                          l-1.5-0.1c-0.1,0-0.2-0.1-0.3-0.2c-0.1-0.3-0.1-0.5-0.1-0.7c0-0.2,0-0.4,0.1-0.8c0.5-0.1,0.9-0.1,1.3-0.1l3.6,0c1,0,2.1,0,3.5,0
                          l0,1.7l-0.1,2.2l0,2.8l0,3.9l0,1.8l0,1.2c-0.1,0.8-0.1,1.2-0.1,1.4c0,0.4,0.1,0.7,0.2,0.8c0.1,0.2,0.3,0.3,0.4,0.3l2.1-0.1l0.3,0
                          c0,0.5,0.1,0.8,0.1,0.9c0,0.1,0,0.3-0.1,0.5c-0.8,0-1.4,0.1-1.8,0.2c-1.6,0.4-3.4,0.9-5.4,1.6l-0.9,0l0-3.7
                          c-0.2,0.2-0.5,0.4-0.8,0.7c-1.4,1.2-2.5,2-3.5,2.4c-1,0.4-2,0.6-3,0.6c-1.3,0-2.4-0.3-3.3-0.8s-1.6-1.2-2-1.9
                          c-0.3-0.6-0.5-1.5-0.6-2.6c0-0.3,0-1.8,0-4.5l0-0.7c0.1-1.5,0.1-2.6,0.1-3.3c0-1.2,0-2-0.1-2.5c0-0.2-0.1-0.4-0.2-0.7
                          c-0.2-0.1-0.5-0.2-0.8-0.2c-1-0.2-1.6-0.3-1.8-0.5c-0.1,0-0.1-0.1-0.1-0.3c0-0.1,0-0.2,0-0.4C44.2,21.4,44.3,21.1,44.3,20.8z"/>
                  <path fill="#FFFFFF" d="M68.8,11.4v-2c0.8,0,1.3,0,1.5,0c1.9,0.2,4.4,0.3,7.4,0.3c0.5,0,1.4,0,2.8-0.1c1-0.1,1.8-0.2,2.3-0.2h1.7
                          c0,1.1,0,1.7,0,1.9c-1.5,0.2-2.4,0.3-2.7,0.4c-0.7,0.2-1.2,0.4-1.5,0.7C80.1,12.6,80,12.8,80,13c0,0.2,0,0.3,0,0.5l0.8,2
                          c0.5,1.6,1.4,3.7,2.7,6.4l2.6,5.9c0.5,1.1,1,2.2,1.4,3.3l1.3-3.3l2.7-7.6l0.6-1.6c0.1-0.2,0.2-0.6,0.3-1c0.4-1.4,0.7-2.4,1-3.1
                          c0.3-0.7,0.4-1.3,0.4-1.7c0-0.3-0.1-0.5-0.4-0.8c-0.4-0.3-1.2-0.6-2.2-0.6c-0.2-0.1-0.5-0.1-0.9-0.1s-0.7-0.1-0.9-0.1
                          c-0.1-0.3-0.1-0.5-0.1-0.7c0-0.2,0-0.6,0.1-1.1c0.3,0,1.1,0.1,2.4,0.2c1.3,0.1,2.6,0.2,3.8,0.2c1.3,0,2.4-0.1,3.3-0.2
                          c0.9-0.1,1.6-0.2,2.2-0.2v0.7c0,0.2,0,0.5,0,0.8c-2,0.7-3.1,1.2-3.5,1.5c-0.2,0.2-0.4,0.4-0.6,0.8c-0.6,1-1.5,3.1-2.7,6.2l-3,7.6
                          c-0.3,0.7-0.6,1.5-0.9,2.3c-0.3,0.8-0.7,1.7-1,2.7c-0.1,0.2-0.4,1.1-1.1,2.8l-0.2,0.4c-0.7,2.2-1.2,3.6-1.5,4.5c-0.6,0-1,0-1.1,0
                          c-0.3,0-0.7,0-1.2,0c-0.2-0.5-0.3-0.9-0.5-1.4c-0.2-0.5-0.8-2.1-2-5l-4.4-9.7l-2.6-6.3c-1.3-2.8-2.1-4.4-2.2-4.6
                          c-0.3-0.4-0.6-0.7-0.9-0.8c-0.3-0.2-1-0.3-2-0.4L68.8,11.4z"/>
                  <path fill="#FFFFFF" d="M101.1,39.4l0-1.5l2.6-0.3c0.4-0.1,0.6-0.3,0.8-0.5c0.1-0.2,0.2-0.7,0.2-1.4v-0.3c0-0.2,0-0.5,0-1
                          c0-0.5,0-0.9,0-1.3c0-0.3,0-0.8-0.1-1.7l0-1.1l0-1.1l0.1-3.7c0-0.5,0-1-0.1-1.5c-0.2-0.2-0.5-0.4-0.9-0.6
                          c-0.4-0.2-1.2-0.3-2.3-0.4v-1.3c1.6-0.1,3-0.4,4.2-1c0.8-0.4,1.7-1,2.7-2h1.5c0.1,1.9,0.1,4.4,0.1,7.4l-0.2,9.4
                          c0,0.6,0,1.2,0.1,1.7c0.5,0.2,1.3,0.3,2.3,0.5c0.4,0.1,0.7,0.1,1,0.2l0,1.3c-0.4,0-0.7,0-0.9,0c-0.2,0-0.6,0-1.1,0
                          c-1.6-0.1-3.7-0.1-6.3-0.1c-0.8,0-1.5,0-2.2,0.1S101.3,39.4,101.1,39.4z M104.3,12c0-0.8,0.3-1.5,0.8-2c0.5-0.5,1.2-0.8,2.1-0.8
                          c0.9,0,1.7,0.3,2.3,0.8s0.9,1.2,0.9,1.9c0,0.5-0.1,1-0.4,1.6c-0.2,0.5-0.6,0.9-1.1,1.3c-0.5,0.3-1,0.5-1.6,0.5
                          c-0.7,0-1.4-0.3-2-0.9C104.6,13.6,104.3,12.9,104.3,12z"/>
                  <path fill="#FFFFFF" d="M115,22c1.8-0.8,3.1-1.5,3.9-2.2c0.8-0.7,1.7-1.9,2.6-3.6h1.3c0.1,0.4,0.2,0.8,0.2,1.3c0,0.8,0,1.4,0,1.9
                          l-0.1,1.4c0,0.1,0,0.3,0,0.5l0.5,0c0.1,0,0.8,0,2.2-0.1c0.1,0,0.7,0,1.7,0c0.1,0.4,0.1,0.8,0.1,1.1c0,0.3-0.1,0.8-0.2,1.2
                          c-0.5,0.1-0.9,0.1-1.2,0.1c-0.1,0-0.4,0-0.7-0.1h-1.2l-0.4,0l-1.1,0.1l0,8.8c0,1.7,0,2.8,0.1,3.2c0.1,0.4,0.3,0.8,0.5,1.2
                          c0.4,0.2,0.7,0.3,1.2,0.3c0.4,0,0.7,0,0.9-0.1c0.2-0.1,0.5-0.3,1-0.7c0.1-0.1,0.2-0.2,0.4-0.3c0.4,0.3,0.7,0.6,0.9,0.9l0.1,0.3
                          c-0.5,0.8-1.3,1.5-2.3,2c-1,0.5-2,0.7-3.1,0.7c-1.4,0-2.6-0.5-3.5-1.4s-1.3-2.3-1.3-4.2l0.1-4v-6.5l-0.7,0l-1.7,0l-0.3-0.1
                          c-0.1-0.1-0.1-0.3-0.1-0.4C114.9,22.9,114.9,22.5,115,22z"/>
                  <path fill="#FFFFFF" d="M149.7,35l0.5,0.3c0.1,0.1,0.2,0.2,0.3,0.4l0,0.1c-0.4,1.4-0.9,2.3-1.5,2.8c-0.6,0.5-1.3,0.8-2.2,0.8
                          c-0.9,0-1.7-0.2-2.3-0.7s-1.2-1.4-1.8-2.6c-0.7,1.2-1.6,2-2.8,2.6s-2.7,0.9-4.4,0.9c-1.6,0-2.8-0.3-3.5-1
                          c-0.8-0.7-1.1-1.5-1.1-2.6c0-0.5,0.1-1,0.3-1.5c0.2-0.5,0.6-1,1.1-1.5c0.5-0.5,1.3-1.1,2.4-1.7c0.2-0.1,0.8-0.4,1.8-0.8l5.7-2.3
                          c0-0.6,0.1-1.2,0.1-1.8c0-2.1-0.3-3.5-0.8-4.2c-0.3-0.5-0.8-0.7-1.6-0.7s-1.5,0.1-2.1,0.4c-0.6,0.3-1.1,0.7-1.4,1.1
                          c-0.2,0.3-0.4,1-0.6,1.9c-0.1,0.7-0.2,1.1-0.3,1.2c-0.2,0.3-0.7,0.6-1.3,0.8c-0.6,0.2-1,0.4-1.2,0.5c-0.8,0.4-1.5,0.6-2,0.6
                          c-0.2-0.2-0.3-0.4-0.3-0.8c0-0.9,0.2-1.6,0.6-2.2c0.6-0.9,1.4-1.7,2.5-2.6c1.1-0.8,2.2-1.4,3.1-1.8c1.3-0.4,2.9-0.6,4.8-0.6
                          c1.2,0,2.3,0.2,3.2,0.7c0.9,0.5,1.5,1.1,1.8,2c0.3,0.9,0.5,2.5,0.5,4.8l0,3.8l0,2.8v0.7c0,0.6,0.1,1.1,0.3,1.3s0.4,0.4,0.7,0.4
                          c0.2,0,0.3,0,0.4-0.1l0.7-1.1L149.7,35z M142.1,29.7c-0.9,0.3-1.9,0.8-3,1.5c-1.1,0.7-1.9,1.4-2.3,2.1c-0.3,0.5-0.5,1.1-0.5,1.9
                          c0,0.7,0.2,1.2,0.6,1.6c0.4,0.4,0.9,0.6,1.4,0.6c0.9,0,1.6-0.2,2.2-0.7c0.8-0.7,1.3-1.2,1.4-1.6c0.1-0.4,0.2-1.5,0.2-3.3
                          C142.2,31.1,142.2,30.4,142.1,29.7z"/>
          </g>
   </g>
   </svg>
   </div>
        </body>
        
        </html>
    `;
};