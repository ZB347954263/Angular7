(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    }
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded')
        return;
    }
    echarts.registerMap('潜江市', {"type":"FeatureCollection","features":[{"type":"Feature","id":"429005","properties":{"name":"潜江市","cp":[112.896866,30.421215],"childNum":5},"geometry":{"type":"MultiPolygon","coordinates":[["@@AAGCCAAECGCGEGCECEGGAEDIBGDEHKHGFGLGFEFE@CCCGECGAIBIBGDKDEDEHCJCH@HCDCHC@ABCBCBCDEAEACAEAC@EBGDEDCBG@CACE@CAAG@E@C@G@CACAGAIAEBC@CFM@C@IFB@DBBBDF@D@DC@A@CCCBEBCBC@EBC@@@GBCBADADBDBB@@@BA@A@CAA@AD@DB@B@@@A@ABAEACACCCC@@@C@CBCDG@A@CCCEAGACCCA@CBCFMBE@CACAAEAICECEECAOEGAC@CBEDGDEBC@EAQEC@CBEDCDGDGDAD@D@BFN@BABABABEBMBIBGDGBEBEAIAGAE@ABEBMLCBE@E@CAEAA@ABAB@B@DBD@F@D@BAB@B@@CDEBIDEACGIAGCECEEAGEGCGGCGCKBOBKBCECCAECGBIDGDIDEDG@K@ECGCGCGECI@K@M@EACCBEDEHEHEJCJCB@BAHOBADC]@O@U@g@c@I@A@@@@D@F@B@FADC@C@C@CBI@]CE@A@GDIFM@GAI@KHIHEDIBK@IBIBKHKDIFKDKBSAOAOBKDIHCD@H@FFHHHJJFH@F@H@LCHCHCHEBGBIDEHCN@LAPBLJHCDCD@BI^ADEFQTKLCDGNCDURIFCF@@CHGNAD@HCPAHAL@PHZ@B@BA@BB@D@B@@@BBJ@D@B@B@B@BAHCDC@ADCBCBCDCF@DCB@DA@A@ABAB@B@D@D@DBBFDBBH@D@DBDHHDDBHFBHFHBFBJ@FAHCJCHAFDLFFHHHFLDJAHBH@NB@@J@DDDDBDDBDB@FBD@F@B@H@BBBBBBD@FADADCDDDBBBBADEDC@CBCCC@AD@FAFAFBD@B@DBH@BBFDHHPFJJFDCFEFE@GDKBGDCNDFDJDFFHJDFBFAHAHEHIHIHCFCJDLDFHHFBHAFDJF@F@JAJBHDFDFFFHDBBBF@HADEBEDA@GDEFAH@DDDB@DAFAD@BDPK@@A@@@AA@@@ABC@AD@@AD@BB@@@@F@@Dn\\D@BA@FC@AF@B@JBF@DD@B@FCDAF@BBDDFHB@F@FAHGBAHCDADAFADAJBCCGEKCUEICOKGOCS@OBMHMFIPOLMJIHAF@DDFJHLHHLDVFHBJANCPCFAJDLDJFJ@F@FCDGHMFQFWDSFIHEFKHONKPIRCXEPCHCL@NHJJDJ@L@NEPIRAH@HBNDJHJPNLLPFH@JCJGNGNELEFIJWJWHIECGGCGCE@M@EBGDIBEFCDCBA@AAEC@CC@ADCHCD@DADAB@D@BBBDBBDDB@B@BADADCDGB@@@@A@@@@@@BA@@@BB@@@A@@@@BB@BD@@B@D@DBB@B@@A@@@AB@D@BBDB@BB@@AB@FGBE@C@A@EAAA@A@KAAAA@@C@GAAAACCEAACAC@ADCDAHEFCBCBC@A@C@CEAE@C@@A@ADC@@@C@CAAI@@BA@@C@@@@BG"],["@@EBA@BA@ADAm[@DA@@BGCBDCBAAOL@BDDDDB@DCDAFAD@DDBJDJBBDBHDDBDBB@B@BA@AAEEEACBADAFBFBBBBE"],["@@@A@@@@A@@B@@B@@@"],["@@CACE@@AAAHB@@@@B@@@@J@"],["@@B@BABABC@@ABA@@DA@AB"]],"encodeOffsets":[[[115693,31143]],[[115376,31363]],[[115691,31204]],[[115698,31148]],[[115742,30921]]]}}],"UTF8Encoding":true});
}));