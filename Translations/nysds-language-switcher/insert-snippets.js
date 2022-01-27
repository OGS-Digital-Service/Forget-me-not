
window.onload = insertbanners 

function insertbanners() {

    var translateheader = document.getElementById('nygov-universal-navigation');
    translateheader.insertAdjacentHTML('afterbegin','<article class="nysds-unav-translate-banner nysds-normalize"><div class="nysds-translate-group"><div class="inline-flex"><div class="globe-icon" aria-hidden="true"></div><label class="sr-only" id="translate-label" for="langs">Select your language preference</label><select class="nysds-select" id="langs" name="languages" aria-labelledby="translate-label" autocomplete="off"><option lang="en" value="" disabled="disabled" selected="selected" hidden>Translate</option><option lang="en" value="en" class="en-english">English</option><option lang="es" value="es" class="es-spanish">Español</option><option lang="ar" value="ar" class="ar-arabic">عربى</option><option lang="bn" value="bn" class="bn-bengali">বাঙালি</option><option lang="zh" value="zh" class="zh-chinese">中文</option><option lang="fr" value="fr" class="fr-french">Français</option><option lang="ht" value="ht" class="ht-haitian-creole">Kreyòl ayisyen</option><option lang="it" value="it" class="it-italian">Italiano</option><option lang="ko" value="ko" class="ko-korean">한국어</option><option lang="pl" value="pl" class="pl-polish">Polski</option><option lang="ru" value="ru" class="ru-russian">Русскийy</option><option lang="ur" value="ur" class="ur-urdu">اردو</option><option lang="yi" value="yi" class="yi-yiddish">יידיש</option></select></div></div></article>');
    
    
    var translatefooter = document.querySelector('#nygov-universal-footer');
    translatefooter.insertAdjacentHTML('afterend', '<article class="nysds-footer-insert-banner nysds-normalize"><section class="nysds-inline-languages"><div class="nysds-translation-services"><div class="nysds-globe-icon-wrap"><a href="#">Translation Services</a></div><span class="pt-0.5 ml-8">This page is available in other languages</span></div><ul><li><a lang="en" href="#" title="English" class="en-english">English</a></li><li><a lang="es" href="#" title="Spanish" class="es-spanish">Español</a></li><li><a lang="ar" href="#" title="Arabic" class="ar-arabic">عربى</a></li><li><a lang="bn" href="#" title="Bengali" class="bn-bengali">বাঙালি</a></li><li><a lang="zh" href="#" title="Chinese" class="zh-chinese">中文</a></li><li><a lang="fr" href="#" title="French" class="fr-french">Français</a></li><li><a lang="ht" href="#" title="Haitian-Creole" class="ht-haitian-creole">Kreyòl ayisyen</a></li><li><a lang="it" href="#" title="Italian" class="it-italian">Italiano</a></li><li><a lang="ko" href="#" title="Korean" class="ko-korean">한국어</a></li><li><a lang="pl" href="#" title="Polish" class="pl-polish">Polski</a></li><li><a lang="ru" href="#" title="Russian" class="ru-russian">Русскийy</a></li><li><a lang="ur" href="#" title="Urdu" class="ur-urdu">اردو</a></li><li><a lang="yi" href="#" title="Yiddish" class="yi-yiddish">יידיש</a></li><ul></section><section class="nysds-translate-group"><div class="nysds-translation-services"><div class="nysds-globe-icon-wrap mb-4"><a href="#">Translation Services</a></div>This page is available in other languages. Select your language preference</div><div class="inline-flex"><label class="sr-only" id="translate-label-footer" for="langs-footer">Select your language preference</label><select class="nysds-select" id="langs-footer" name="languages" aria-labelledby="translate-label-footer"><option lang="en" value="" disabled="disabled" selected="selected" hidden>Translate</option><option lang="en" value="en" class="en-english">English</option><option lang="es" value="es" class="es-spanish">Español</option><option lang="ar" value="ar" class="ar-arabic">عربى</option><option lang="bn" value="bn" class="bn-bengali">বাঙালি</option><option lang="zh" value="zh" class="zh-chinese">中文</option><option lang="fr" value="fr" class="fr-french">Français</option><option lang="ht" value="ht" class="ht-haitian-creole">Kreyòl ayisyen</option><option lang="it" value="it" class="it-italian">Italiano</option><option lang="ko" value="ko" class="ko-korean">한국어</option><option lang="pl" value="pl" class="pl-polish">Polski</option><option lang="ru" value="ru" class="ru-russian">Русскийy</option><option lang="ur" value="ur" class="ur-urdu">اردو</option><option lang="yi" value="yi" class="yi-yiddish">יידיש</option></select></div></section></article>');
    
    function getHostName(url) {
        var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
        if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
        return match[2];
        }
        else {
            return null;
        }
    }
    function getDomain(url) {
        var hostName = getHostName(url);
        var domain = hostName;
        var parts = hostName.split('.');
    
        if (hostName != null) {
           
            if (["es","ar","bn","zh","fr","ht","it","ko","pl","ru","ur","yi"].includes(parts[0])){
              let urlArray = parts.slice(1,20);
              domain = urlArray.join(".")
                }
    
        }
        return domain;
    }
    
    const prot = window.location.protocol;
    const hre = window.location.href;
    const path = window.location.pathname;
    const search = window.location.search; 
    const getd = getDomain(hre);
    const makeprot = prot + "//";
    const makeurl =  getd + path + search;
    
    var enUrl = makeprot + makeurl;
    var esUrl = makeprot + "es." + makeurl
    var arUrl = makeprot + "ar." + makeurl;
    var bnUrl = makeprot + "bn." + makeurl;
    var zhUrl = makeprot + "zh." + makeurl;
    var frUrl = makeprot + "fr." + makeurl;
    var htUrl = makeprot + "ht." + makeurl;
    var itUrl = makeprot + "it." + makeurl;
    var koUrl = makeprot + "ko." + makeurl;
    var plUrl = makeprot + "pl." + makeurl;
    var ruUrl = makeprot + "ru." + makeurl;
    var urUrl = makeprot + "ur." + makeurl;
    var yiUrl = makeprot + "yi." + makeurl;
    var en = document.getElementsByClassName("en-english");
    var es = document.getElementsByClassName("es-spanish");
    var ar = document.getElementsByClassName("ar-arabic");
    var bn = document.getElementsByClassName("bn-bengali");
    var zh = document.getElementsByClassName("zh-chinese");
    var fr = document.getElementsByClassName("fr-french");
    var ht = document.getElementsByClassName("ht-haitian-creole");
    var it = document.getElementsByClassName("it-italian");
    var ko = document.getElementsByClassName("ko-korean");
    var pl = document.getElementsByClassName("pl-polish");
    var ru = document.getElementsByClassName("ru-russian");
    var ur = document.getElementsByClassName("ur-urdu");
    var yi = document.getElementsByClassName("yi-yiddish");  
            for (var x=0; x < en.length, x < es.length, x < ar.length, x < bn.length, x < zh.length, x < fr.length, x < ht.length, x < it.length, x < ko.length, x < pl.length, x < ru.length, x < ur.length, x < yi.length; x++) {
                
                if (en[x].value == null ){en[x].setAttribute('href', enUrl);} else {en[x].setAttribute('value', enUrl);}
                if (es[x].value == null ){es[x].setAttribute('href', esUrl);} else {es[x].setAttribute('value', esUrl);}
                if (ar[x].value == null ){ar[x].setAttribute('href', arUrl);} else {ar[x].setAttribute('value', arUrl);}
                if (bn[x].value == null ){bn[x].setAttribute('href', bnUrl);} else {bn[x].setAttribute('value', bnUrl);}
                if (zh[x].value == null ){zh[x].setAttribute('href', zhUrl);} else {zh[x].setAttribute('value', zhUrl);}
                if (fr[x].value == null ){fr[x].setAttribute('href', frUrl);} else {fr[x].setAttribute('value', frUrl);}
                if (ht[x].value == null ){ht[x].setAttribute('href', htUrl);} else {ht[x].setAttribute('value', htUrl);}
                if (it[x].value == null ){it[x].setAttribute('href', itUrl);} else {it[x].setAttribute('value', itUrl);}
                if (ko[x].value == null ){ko[x].setAttribute('href', koUrl);} else {ko[x].setAttribute('value', koUrl);}
                if (pl[x].value == null ){pl[x].setAttribute('href', plUrl);} else {pl[x].setAttribute('value', plUrl);}
                if (ru[x].value == null ){ru[x].setAttribute('href', ruUrl);} else {ru[x].setAttribute('value', ruUrl);}
                if (ur[x].value == null ){ur[x].setAttribute('href', urUrl);} else {ur[x].setAttribute('value', urUrl);}
                if (yi[x].value == null ){yi[x].setAttribute('href', yiUrl);} else {yi[x].setAttribute('value', yiUrl);}
    
                }
    
    document.getElementById("langs").addEventListener('change', function () {
        window.location = this.value;
    });
    document.getElementById("langs-footer").addEventListener('change', function () {
        window.location = this.value;
    });


}
    