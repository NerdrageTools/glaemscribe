Glaemscribe.resource_manager.raw_modes["japanese-tengwar"] = "\\**\n\nGlǽmscribe (also written Glaemscribe) is a software dedicated to\nthe transcription of texts between writing systems, and more \nspecifically dedicated to the transcription of J.R.R. Tolkien\'s \ninvented languages to some of his devised writing systems.\n\nCopyright (C) 2015 Benjamin Babut (Talagan).\n\nThis program is free software: you can redistribute it and/or modify\nit under the terms of the GNU Affero General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\nany later version.\n\nThis program is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU Affero General Public License for more details.\n\nYou should have received a copy of the GNU Affero General Public License\nalong with this program.  If not, see <http://www.gnu.org/licenses/>.\n\n**\\\n\n\\language \"Japanese\"\n\\writing  \"Tengwar\"\n\\mode			\"Japanese Tengwar - G*\"\n\\authors	\"Talagan (Benjamin Babut)\"\n\\version	\"0.0.1\"\n \n\\world      primary\n\\invention  experimental \n \n\\raw_mode \"raw-tengwar\"\n \n\\charset  tengwar_ds_sindarin false\n\\charset  tengwar_ds_parmaite false\n\\charset  tengwar_ds_eldamar  false\n\\charset  tengwar_ds_annatar  true\n\\charset  tengwar_ds_elfica   false\n\n\\charset  tengwar_guni_sindarin false\n\\charset  tengwar_guni_parmaite false\n\\charset  tengwar_guni_eldamar  false\n\\charset  tengwar_guni_annatar  false\n\\charset  tengwar_guni_elfica   false\n\n\\charset  tengwar_freemono    false\n\\charset  tengwar_telcontar   false\n\n\\beg options\n\n\\** Vowel options **\\\n  \\beg option choon_long_vowels CHOON_CONFLATE\n    \\value CHOON_CONFLATE 0\n    \\value CHOON_KEEP_SEPARATE 1\n  \\end \n  \\** Yoon options **\\\n  \\beg option palatal_sign PALATAL_SIGN_UNUTIXE\n    \\value PALATAL_SIGN_UNUTIXE 0\n    \\value PALATAL_SIGN_DOUBLE_UNUTIXE 1\n  \\end\n  \n  \\** Palatal **\\\n  \\beg option gojuon_y GOJUON_Y_USE_YANTA\n	  \\value GOJUON_Y_USE_TELCO 0\n	  \\value GOJUON_Y_USE_YANTA 1\n	\\end\n  \n  \\** labial **\\\n  \\beg option gojuon_w GOJUON_W_USE_URE\n	  \\value GOJUON_W_USE_TELCO 0\n	  \\value GOJUON_W_USE_URE 1\n	\\end\n			\n  \\** Consonant options **\\\n	\\beg option isolated_n ISOLATED_N_USE_NOLDO\n	  \\value ISOLATED_N_USE_NOLDO 0\n		\\value ISOLATED_N_USE_MODIFIER 1\n	\\end\n  \n  \\beg option geminates GEMINATES_USE_HALLA\n    \\value GEMINATES_USE_HALLA 0\n    \\value GEMINATES_USE_MODIFIER 1\n    \\value GEMINATES_DOUBLE_TENGWA 2\n  \\end\n\n  \\beg option dakuten_h_p_b DAKUTEN_THK\n    \\value DAKUTEN_THK 0 \\** JP STYLE **\\\n    \\value DAKUTEN_TPK 1 \\** ELVISH STYLE **\\\n  \\end\n  \n  \\** Foreign otpions **\\\n  \\beg option foreign_labialized FOREIGN_LABIALIZED_DOWN_TEHTA\n    \\value FOREIGN_LABIALIZED_DOWN_TEHTA 0\n    \\value FOREIGN_LABIALIZED_QUESSETEMA 1\n  \\end\n    \n  \\beg option foreign_f_v FOREIGN_F_V_XTD\n    \\value FOREIGN_F_V_XTD 0\n    \\value FOREIGN_F_V_OVERSTEM 1\n  \\end\n    \n  \\** Graphical style options **\\\n  \\beg option consonant_modification_style CONSONANT_MODIFICATION_STYLE_WAVE\n    \\value CONSONANT_MODIFICATION_STYLE_WAVE 0\n    \\value CONSONANT_MODIFICATION_STYLE_BAR 1\n  \\end    \n  \n\\end\n\n\\beg preprocessor\n\n  \\downcase\n\n  \\** Normalize explicitly written long vowels **\\\n  \\rxsubstitute \"[āâàá]\" \"aー\"\n  \\rxsubstitute \"[īîíì]\" \"iー\"\n  \\rxsubstitute \"[ūûúù]\" \"uー\"\n  \\rxsubstitute \"[ēêéè]\" \"eー\"\n  \\rxsubstitute \"[ōôóò]\" \"oー\"\n  \n  \\** Normalize elvish bizarrerie **\\\n  \\substitute \"ä\" \"a\"\n  \\substitute \"ï\" \"i\"\n  \\substitute \"ü\" \"u\"\n  \\substitute \"ë\" \"e\"\n  \\substitute \"ö\" \"o\"\n\n  \\if \"choon_long_vowels == CHOON_CONFLATE\"\n\n    \\** ================== **\\\n    \\**        Gojûon      **\\\n    \\** ================== **\\\n    \n    \\rxsubstitute \"([あアカかさサたタなナはハまマらラがガざザだダばバぱパやヤわワ])[あアー]\" \"\\\\1ー\"\n    \\rxsubstitute \"([いイきキしシちチにニひヒみミりリぎギじジぢヂびビぴピゐヰ])[いイー]\" \"\\\\1ー\"\n    \\rxsubstitute \"([うウくクすスつツぬヌふフむムるルぐグずズづヅぶブぷプゆユ])[うウー]\" \"\\\\1ー\"\n    \\rxsubstitute \"([えエけケせセてテねネへヘめメれレげゲぜゼでデべベぺペゑヱ])[いイー]\" \"\\\\1ー\"\n    \\rxsubstitute \"([おオこコそソとトのノほホもモろロごゴぞゾどドぼボぽポよヨをヲ])[うウー]\" \"\\\\1ー\"\n    \n    \\** too, oo . E.G. ookami, too **\\\n    \\rxsubstitute \"([とトおオ])[おオ]\" \"\\\\1ー\"\n    \\** nee, ee . E.G. oneesan, nee, ee **\\\n    \\rxsubstitute \"([ねネえエ])[えエ]\" \"\\\\1ー\"\n    \n    \\** ================== **\\\n    \\**        Yôon        **\\\n    \\** ================== **\\\n\n    \\** Normalization of long vowels : yoon .yâ, .yû, .yô **\\\n    \\rxsubstitute \"([ゃャ])[あアー]\"    \"\\\\1ー\"\n    \\rxsubstitute \"([ゅュ])[うウー]\"    \"\\\\1ー\"\n    \\rxsubstitute \"([ょョ])[うウー]\"    \"\\\\1ー\"\n    \n    \\** ================== **\\\n    \\** Rômaji equivalents **\\\n    \\** ================== **\\\n    \n    \\**\n      a ka sa  ta  na ha ma ra ga za da  ba pa ya wa + a = .â     (k|s|t|n|h|m|r|g|z|d|b|p|y|w)\n      i ki shi chi ni hi mi ri gi ji dji bi pi -  wi + i = .î     (k|sh|ch|n|h|m|r|g|j|dj|b|p|w)\n      u ku su  tsu nu fu mu ru gu ju dju bu pu yu -  + u = .û     (k|s|ts|n|f|m|r|g|j|dj|b|p|y)\n      e ke se  te  ne he me re ge ze de  be pe -  we + i = .ê     (k|s|t|n|h|m|r|g|z|d|b|p|w)\n      o ko so  to  no ho mo ro go zo do  bo po yo wo + u = .ô     (k|s|t|n|h|m|r|g|z|d|b|p|y|w)\n    **\\\n    \n    \\** Note : this additionally does handle the Yôon through y **\\\n    \\rxsubstitute \"aa\"   \"aー\"\n    \\rxsubstitute \"ii\"   \"iー\"\n    \\rxsubstitute \"uu\"   \"uー\"\n    \\rxsubstitute \"ei\"   \"eー\"\n    \\rxsubstitute \"ou\"   \"oー\"\n\n    \\** nee, ee . E.G. oneesan, nee, ee. Avoid breaking things like kee. **\\\n    \\rxsubstitute \"(k|s|t|h|m|r|g|z|d|b|p|w)ee\"    \"\\\\1e\'e\"  \\** Removed n for nee **\\\n    \\rxsubstitute \"(k|s|n|h|m|r|g|z|d|b|p|y|w)oo\"  \"\\\\1o\'o\"  \\** Removed t for too **\\\n    \\rxsubstitute \"oo\" \"oー\"\n    \\rxsubstitute \"ee\" \"eー\"\n\n    \\** Foreign additional stuff should always use macrons or accents to denote long vowels **\\\n  \\endif\n	\n	\\** Normalization of geminates.  Simply introduce っ in romanisation ;) **\\\n	\\rxsubstitute \"([tpkcs])\\\\1\" \"っ\\\\1\"\n	\\rxsubstitute \"tch\" \"っch\"\n  \n	\\** Far less common, maybe even impossible **\\\n  \\rxsubstitute \"([h])\\\\1\" \"っ\\\\1\"      \n  \\rxsubstitute \"([dbgz])\\\\1\" \"っ\\\\1\"\n	\\rxsubstitute \"([fvl])\\\\1\" \"っ\\\\1\" \n  \\rxsubstitute \"([rwy])\\\\1\" \"っ\\\\1\"\n	\n	\\** Normalization of isolated nasalizer n (&m). Simply introduce ん in romanisation :) **\\\n	\\rxsubstitute \"(n|m)([^aeiouy]|$)\" \"ん\\\\2\"\n\n\\end\n\n\\beg processor\n	\\beg rules litteral\n  \n    \\** ================================ **\\\n    \\**         PREREQUISITES            **\\\n    \\** ================================ **\\\n     \n    \\if \"consonant_modification_style == CONSONANT_MODIFICATION_STYLE_WAVE\"\n      {GEMINATE} === GEMINATE_SIGN_TILD\n      {NASAL}    === NASALIZE_SIGN_TILD\n    \\else\n      {GEMINATE} === GEMINATE_SIGN\n      {NASAL}    === NASALIZE_SIGN\n    \\endif\n    \n    \\** Dakuten / Handakuten resolution **\\\n    \\if \"dakuten_h_p_b == DAKUTEN_THK\"\n      {_P_TENGWA_} === VALA\n      {_H_TENGWA_} === PARMA\n    \\else\n      {_P_TENGWA_} === PARMA\n      {_H_TENGWA_} === VALA\n    \\endif\n    \n    {MORAIC_NASAL}        === (ん,ン)		\n    {SOKUON}              === (っ,ッ)\n      \n		{_A_} === A_TEHTA\n		{_I_} === I_TEHTA\n		{_U_} === U_TEHTA\n		{_E_} === E_TEHTA\n		{_O_} === O_TEHTA\n		\n		{_AA_} === A_TEHTA_REVERSED\n		{_II_} === I_TEHTA_DOUBLE\n		{_UU_} === U_TEHTA_DOUBLE\n		{_EE_} === E_TEHTA_DOUBLE\n		{_OO_} === O_TEHTA_DOUBLE\n\n    {_SHORT_VOWELS_}      === [{_A_}  * {_I_}  * {_U_}  * {_E_}  * {_O_}]\n		{_LONG_VOWELS_}       === [{_AA_} * {_II_} * {_UU_} * {_EE_} * {_OO_}]\n\n    {_SHORT_VOWELS_YON_}  === [{_A_} * {_U_} * {_O_}]\n    {_LONG_VOWELS_YON_}   === [{_AA_} * {_UU_} * {_OO_}]	\n        \n		{NASAL_OR_NOT}        === [{NULL} * {MORAIC_NASAL}]\n		{GEMINATE_OR_NOT}     === [{NULL} * {SOKUON}]\n		{MODS}                === {NASAL_OR_NOT} {GEMINATE_OR_NOT}\n		\n    \\if \"palatal_sign == PALATAL_SIGN_UNUTIXE\"\n      {_PALATAL_}             === UNUTIXE\n    \\else                   \n      {_PALATAL_}             === I_TEHTA_DOUBLE_INF\n    \\endif\n    \n		{_NASAL_}                 === {NASAL}\n		{_GEMINATE_}              === {GEMINATE}\n    {_LABIAL_}                === U_TEHTA_INF\n    {_CANCELLER_}             === THINNAS\n    {_SIBILANT_}              === SARINCE\n    {_CANCEL_THEN_PALATAL_}   === CIRC_TEHTA_INF\n    \n    \\** THIS IS OUR GENERAL MACRO FOR JAPANESE. Will be used almost everywhere **\\\n    \\beg macro serie ARG_SERIE _ARG_MAIN_TENGWA_ _ARG_SERIE_MODIFIERS_ _ARG_SHORT_VOWELS_ _ARG_LONG_VOWELS_  _ARG_SIB_   \n      {_PREMODS_}   === {NULL}\n      {_POSTMODS_}  === {NULL}\n      {__X__}       === identity\n      \\if \"isolated_n == ISOLATED_N_USE_NOLDO\"\n        \\if \"geminates == GEMINATES_USE_HALLA\"\n          {_PREMODS_}   === [{NULL} * NOLDO][{NULL} * HALLA]\n        \\elsif \"geminates == GEMINATES_DOUBLE_TENGWA\"  \n          {_PREMODS_}   === [{NULL} * NOLDO][{NULL} * {_ARG_MAIN_TENGWA_}]\n        \\else\n          {_PREMODS_}   === [{NULL} * NOLDO]\n          {_POSTMODS_}  === [{NULL} * {_GEMINATE_}]\n        \\endif\n      \\else \n        \\if \"geminates == GEMINATES_USE_HALLA\"\n          {_PREMODS_}   === [{NULL} * HALLA]\n          {_POSTMODS_}  === [{NULL} * {_NASAL_}]\n          \\** The nasal mark is before the geminate, but their position is reversed at the arrival, so cross rule here **\\\n          {__X__}       === 2,1,3\n        \\elsif \"geminates == GEMINATES_DOUBLE_TENGWA\"  \n          \\** This case is the most complex because we want :  (Teng Nasal) Teng **/\n          \\** But it can be factorized by cheating because ; **\\\n          \\** (Teng Nasal) Teng = Teng (Nasal Teng) **\\\n          {_POSTMODS_}  === [{NULL} * {_NASAL_}][{NULL} * {_ARG_MAIN_TENGWA_}]\n        \\else\n          {_POSTMODS_}  === [{NULL} * {_NASAL_}][{NULL} * {_GEMINATE_}]\n        \\endif       \n      \\endif\n      {MODS}{ARG_SERIE}   --> {__X__} --> {_PREMODS_} {_ARG_MAIN_TENGWA_} {_POSTMODS_} {_ARG_SERIE_MODIFIERS_} {_ARG_SHORT_VOWELS_} {_ARG_SIB_}\n      {MODS}{ARG_SERIE}ー --> {__X__} --> {_PREMODS_} {_ARG_MAIN_TENGWA_} {_POSTMODS_} {_ARG_SERIE_MODIFIERS_} {_ARG_LONG_VOWELS_} {_ARG_SIB_}  \n    \\end\n    \n    \\** ================================ **\\\n    \\**         START OF RULES           **\\\n    \\** ================================ **\\\n    \n		\\** Isolated vowels  **\\\n		{GOJUON}   === [(あ,ア,a) * (い,イ,i) * (う,ウ,u) * (え,エ,e) * (お,オ,o)]\n		{YOON}     === [(や,ヤ,ya) * (ゆ,ユ,yu) * (よ,ヨ,yo)]  	\n	  {GOJUON}   --> TELCO {_SHORT_VOWELS_}\n	  {GOJUON}ー  --> TELCO {_LONG_VOWELS_}\n    \n    \\** Isolated Y serie **\\\n		\\if \"gojuon_y == GOJUON_Y_USE_YANTA\" \n      {TENGWA}   === YANTA\n		\\else\n      {TENGWA}   === TELCO {_PALATAL_}\n		\\endif\n  	{YOON}   --> {TENGWA}  {_SHORT_VOWELS_YON_}\n	  {YOON}ー  --> {TENGWA}  {_LONG_VOWELS_YON_}  \n    \n		\\** T serie **\\\n		{GOJUON}   === [(た,タ,ta) * (ち,チ,chi) * (つ,ツ,tsu) * (て,テ,te) * (と,ト,to)] 	\n		{YOON}     === [(ちゃ,チャ,cha) * (ちゅ,チュ,chu) * (ちょ,チョ,cho)]  	\n		{TENGWA}   === TINCO\n		\n    \\deploy serie {GOJUON}  {TENGWA} {NULL}       {_SHORT_VOWELS_}      {_LONG_VOWELS_}       {NULL}\n    \\deploy serie {YOON}    {TENGWA} {_PALATAL_}  {_SHORT_VOWELS_YON_}  {_LONG_VOWELS_YON_}   {NULL}\n	\n		\\** P serie **\\\n		{GOJUON}   === [(ぱ,パ,pa) * (ぴ,ピ,pi) * (ぷ,プ,pu) * (ぺ,ペ,pe) * (ぽ,ポ,po)] 	\n		{YOON}     === [(ぴゃ,ピャ,pya) * (ぴゅ,ピュ,pyu) * (ぴょ,ピョ,pyo)] \n		{TENGWA}   === {_P_TENGWA_}\n		\n    \\deploy serie {GOJUON}  {TENGWA} {NULL}       {_SHORT_VOWELS_}      {_LONG_VOWELS_}       {NULL}\n    \\deploy serie {YOON}    {TENGWA} {_PALATAL_}  {_SHORT_VOWELS_YON_}  {_LONG_VOWELS_YON_}   {NULL}\n	\n 		\\** K serie **\\\n		{GOJUON}   === [(か,カ,ka) * (き,キ,ki) * (く,ク,ku) * (け,ケ,ke) * (こ,コ,ko)] 	\n		{YOON}     === [(きゃ,キャ,kya) * (きゅ,キュ,kyu) * (きょ,キョ,kyo)]  \n		{TENGWA}   === CALMA\n\n    \\deploy serie {GOJUON}  {TENGWA} {NULL}       {_SHORT_VOWELS_}      {_LONG_VOWELS_}       {NULL}\n    \\deploy serie {YOON}    {TENGWA} {_PALATAL_}  {_SHORT_VOWELS_YON_}  {_LONG_VOWELS_YON_}   {NULL}\n		\n		\\** D serie **\\\n		{GOJUON}   === [(だ,ダ,da) * (ぢ,ヂ,dji) * (づ,ヅ,dzu) * (で,デ,de) * (ど,ド,do)] \n		{YOON}     === [(ぢゃ,ヂャ,dja) * (ぢゅ,ヂュ,dju) * (ぢょ,ヂョ,djo)] \n		{TENGWA}   === ANDO\n\n    \\deploy serie {GOJUON}  {TENGWA} {NULL}       {_SHORT_VOWELS_}      {_LONG_VOWELS_}       {NULL}\n    \\deploy serie {YOON}    {TENGWA} {_PALATAL_}  {_SHORT_VOWELS_YON_}  {_LONG_VOWELS_YON_}   {NULL}\n		\n 		\\** B serie **\\\n		{GOJUON}   === [(ば,バ,ba) * (び,ビ,bi) * (ぶ,ブ,bu) * (べ,ベ,be) * (ぼ,ボ,bo)] 	\n		{YOON}     === [(びゃ,ビャ,bya) * (びゅ,ビュ,byu) * (びょ,ビョ,byo)] \n		{TENGWA}   === UMBAR\n\n    \\deploy serie {GOJUON}  {TENGWA} {NULL}       {_SHORT_VOWELS_}      {_LONG_VOWELS_}       {NULL}\n    \\deploy serie {YOON}    {TENGWA} {_PALATAL_}  {_SHORT_VOWELS_YON_}  {_LONG_VOWELS_YON_}   {NULL}\n		\n 		\\** G Serie **\\\n		{GOJUON}   === [(が,ガ,ga) * (ぎ,ギ,gi) * (ぐ,グ,gu) * (げ,ゲ,ge) * (ご,ゴ,go)] 			\n		{YOON}     === [(ぎゃ,ギャ,gya) * (ぎゅ,ギュ,gyu) * (ぎょ,ギョ,gyo)]  \n		{TENGWA}   === ANGA\n\n    \\deploy serie {GOJUON}  {TENGWA} {NULL}       {_SHORT_VOWELS_}      {_LONG_VOWELS_}       {NULL}\n    \\deploy serie {YOON}    {TENGWA} {_PALATAL_}  {_SHORT_VOWELS_YON_}  {_LONG_VOWELS_YON_}   {NULL}\n		\n		\\** N serie **\\	\n		{GOJUON}   === [(な,ナ,na) * (に,ニ,ni) * (ぬ,ヌ,nu) * (ね,ネ,ne) * (の,ノ,no)] 				\n		{YOON}     === [(にゃ,ニャ,nya) * (にゅ,ニュ,nyu) * (にょ,ニョ,nyo)] \n		{TENGWA}   === NUMEN\n\n    \\deploy serie {GOJUON}  {TENGWA} {NULL}       {_SHORT_VOWELS_}      {_LONG_VOWELS_}       {NULL}\n    \\deploy serie {YOON}    {TENGWA} {_PALATAL_}  {_SHORT_VOWELS_YON_}  {_LONG_VOWELS_YON_}   {NULL}\n		{MORAIC_NASAL} --> NOLDO\n		\n		\\** M serie **\\	\n		{GOJUON}   === [(ま,マ,ma) * (み,ミ,mi) * (む,ム,mu) * (め,メ,me) * (も,モ,mo)] 					\n		{YOON}     === [(みゃ,ミャ,mya) * (みゅ,ミュ,myu) * (みょ,ミョ,myo)] \n		{TENGWA}   === MALTA\n\n    \\deploy serie {GOJUON}  {TENGWA} {NULL}       {_SHORT_VOWELS_}      {_LONG_VOWELS_}       {NULL}\n    \\deploy serie {YOON}    {TENGWA} {_PALATAL_}  {_SHORT_VOWELS_YON_}  {_LONG_VOWELS_YON_}   {NULL}\n\n		\\** H serie **\\	\n		{GOJUON}   === [(は,ハ,ha) * (ひ,ヒ,hi) * (ふ,フ,fu) * (へ,ヘ,he) * (ほ,ホ,ho)] 					\n		{YOON}     === [(ひゃ,ヒャ,hya) * (ひゅ,ヒュ,hyu) * (ひょ,ヒョ,hyo)] \n		{TENGWA}   === {_H_TENGWA_}\n\n    \\deploy serie {GOJUON}  {TENGWA} {NULL}       {_SHORT_VOWELS_}      {_LONG_VOWELS_}       {NULL}\n    \\deploy serie {YOON}    {TENGWA} {_PALATAL_}  {_SHORT_VOWELS_YON_}  {_LONG_VOWELS_YON_}   {NULL}\n		\n		\\** S serie **\\\n		{GOJUON}   === [(さ,サ,sa) * (し,シ,shi) * (す,ス,su) * (せ,セ,se) * (そ,ソ,so)] 					\n		{YOON}     === [(しゃ,シャ,sha) * (しゅ,シュ,shu) * (しょ,ショ,sho)] \n		{TENGWA}   === SILME_NUQUERNA\n\n    \\deploy serie {GOJUON}  {TENGWA} {NULL}       {_SHORT_VOWELS_}      {_LONG_VOWELS_}       {NULL}\n    \\deploy serie {YOON}    {TENGWA} {_PALATAL_}  {_SHORT_VOWELS_YON_}  {_LONG_VOWELS_YON_}   {NULL}\n		\n		\\** Z serie **\\\n		{GOJUON}   === [(ざ,ザ,za) * (じ,ジ,ji) * (ず,ズ,zu) * (ぜ,ゼ,ze) * (ぞ,ゾ,zo)] 					\n		{YOON}     === [(じゃ,ジャ,ja) * (じゅ,ジュ,ju) * (じょ,ジョ,jo)] \n		{TENGWA}   === ESSE_NUQUERNA\n\n    \\deploy serie {GOJUON}  {TENGWA} {NULL}       {_SHORT_VOWELS_}      {_LONG_VOWELS_}       {NULL}\n    \\deploy serie {YOON}    {TENGWA} {_PALATAL_}  {_SHORT_VOWELS_YON_}  {_LONG_VOWELS_YON_}   {NULL}\n\n	  \\** R serie **\\\n		{GOJUON}   === [(ら,ラ,ra) * (り,リ,ri) * (る,ル,ru) * (れ,レ,re) * (ろ,ロ,ro)] 					\n		{YOON}     === [(りゃ,リャ,rya) * (りゅ,リュ,ryu) * (りょ,リョ,ryo)] \n		{TENGWA}   === ROMEN\n\n    \\deploy serie {GOJUON}  {TENGWA} {NULL}       {_SHORT_VOWELS_}      {_LONG_VOWELS_}       {NULL}\n    \\deploy serie {YOON}    {TENGWA} {_PALATAL_}  {_SHORT_VOWELS_YON_}  {_LONG_VOWELS_YON_}   {NULL}\n		\n		\\** W serie **\\\n		{GOJUON}   === [(わ,ワ,wa) * (ゐ,ヰ,wi) * (ゑ,ヱ,we) ] 				\n		\\if \"gojuon_w == GOJUON_W_USE_URE\" \n      {TENGWA}   === URE\n		\\else\n		  {TENGWA}   === TELCO {_LABIAL_}\n    \\endif\n    \n    {__SV__} === [{_A_} * {_I_} * {_E_}]\n    {__LV__} === [{_AA_} * {_II_} * {_EE_}]   \n    \\deploy serie {GOJUON}  {TENGWA} {NULL} {__SV__} {__LV__} {NULL}\n		\n	  \\** SPECIALS **\\\n    (へ,he,e){ASTERISK} --> NUM_12\n		(は,ha,wa){ASTERISK} --> HWESTA_SINDARINWA\n	  (を,ヲ,wo,を{ASTERISK},ヲ{ASTERISK},wo{ASTERISK},o{ASTERISK}) --> VAIA\n    {ASTERISK} --> {NULL}\n    \n    \\** ***************** **\\\n    \\** Extended katakana **\\\n    \\** ***************** **\\\n    \n    \\if \"foreign_f_v == FOREIGN_F_V_XTD\"\n      {_FOREIGN_F_} === TW_EXT_12\n      {_FOREIGN_V_} === TW_EXT_22\n    \\else\n      {_FOREIGN_F_} === FORMEN\n      {_FOREIGN_V_} === AMPA      \n    \\endif  \n    \n    {SERIE}  === [(イィ,yi) * (イェ,ye)]\n		\\if \"gojuon_y == GOJUON_Y_USE_YANTA\" \n      {TENGWA}   === YANTA\n		\\else\n      {TENGWA}   === TELCO {_PALATAL_}\n		\\endif\n		{SERIE}     --> {TENGWA}  [{_I_} * {_E_}]\n		{SERIE}ー   --> {TENGWA}  [{_II_} * {_EE_}]\n    \n    \\** wa, wi, wu, we, wo **\\\n    \\** wa, wi, we - these latin combinations where already defined above **\\\n    {SERIE}   === [(ウァ,wa) * (ウィ,wi) * (ウゥ,wu) * (ウェ,we) * (ウォ,wo)] \n		\\if \"gojuon_w == GOJUON_W_USE_URE\" \n      {TENGWA}   === URE\n		\\else\n		  {TENGWA}   === TELCO {_LABIAL_}\n    \\endif\n    \n    \\deploy serie {SERIE}  {TENGWA} {NULL} {_SHORT_VOWELS_} {_LONG_VOWELS_} {NULL}\n    \n    {SERIE}  === [(ウュ,wyu)]\n    {TENGWA} === URE \\** only possibility : palatal + labial interfere so telco + labial + palatal will not work **\\\n    {__SV__} === [{_U_}]\n    {__LV__} === [{_UU_}]   \n    \\deploy serie {SERIE}  {TENGWA} {_PALATAL_} {__SV__} {__LV__} {NULL}\n    \n    \\** va vi vu ve vo **\\\n		{SERIE}   === [(ヴァ,ヷ,va) * (ヴィ,ヸ,vi) * (ヴ,vu) * (ヴェ,ヹ,ve) * (ヴォ,ヺ,vo)] \n		{TENGWA}  === {_FOREIGN_V_}\n    \\deploy serie {SERIE}  {TENGWA} {NULL} {_SHORT_VOWELS_} {_LONG_VOWELS_} {NULL}\n\n		\n    \\** v yon : vya vyu vye vyo **\\\n		{SERIE}   === [(ヴャ,vya) * (ヴュ,vyu) * (ヴィェ,vye) * (ヴョ,vyo)] \n		{TENGWA}  === {_FOREIGN_V_}  \n    {__SV__} === [{_A_} * {_U_} * {_E_} * {_O_}]\n    {__LV__} === [{_AA_} * {_UU_} * {_EE_} * {_OO_}]\n    \\deploy serie {SERIE}  {TENGWA} {_PALATAL_} {__SV__} {__LV__} {NULL}\n     \n    \\** kye **\\\n		{SERIE}   === [(キェ,kye)]\n    {TENGWA}  === CALMA\n    {__SV__} === [{_E_}]\n    {__LV__} === [{_EE_}]\n    \\deploy serie {SERIE}  {TENGWA} {_PALATAL_} {__SV__} {__LV__} {NULL}\n\n    \\** gye **\\\n		{SERIE}   === [(ギェ,gye)]\n    {TENGWA}  === ANGA\n    {__SV__} === [{_E_}]\n    {__LV__} === [{_EE_}]\n    \\deploy serie {SERIE}  {TENGWA} {_PALATAL_} {__SV__} {__LV__} {NULL}\n      \n    \\if \"foreign_labialized == FOREIGN_LABIALIZED_DOWN_TEHTA\"      \n      {_FOREIGN_KW_} === CALMA\n      {_FOREIGN_GW_} === ANGA\n      {_FOREIGN_LABIALIZED_DIACRITIC_} === {_LABIAL_}\n    \\else\n      {_FOREIGN_KW_} === QUESSE\n      {_FOREIGN_GW_} === UNGWE\n      {_FOREIGN_LABIALIZED_DIACRITIC_} === {NULL}\n    \\endif\n                  \n    \\** kWa, kWa, kwi, kwe, kwo **\\\n		{SERIE}   === [(クァ,クヮ,kwa) * (クィ,kwi) * (クェ,kwe) * (クォ,kwo)]\n    {TENGWA}  === {_FOREIGN_KW_}\n    {__SV__} === [{_A_} * {_I_} * {_E_} * {_O_}]\n    {__LV__} === [{_AA_} * {_II_} * {_EE_} * {_OO_}]\n    \\deploy serie {SERIE}  {TENGWA} {_FOREIGN_LABIALIZED_DIACRITIC_}  {__SV__} {__LV__} {NULL}\n    \n      \n    \\** gwa, gWa, gwi, gwe, gwo **\\\n		{SERIE}   === [(グァ,グヮ,gwa) * (グィ,gwi) * (グェ,gwe) * (グォ,gwo)]\n    {TENGWA}  === {_FOREIGN_GW_}\n    {__SV__} === [{_A_} * {_I_} * {_E_} * {_O_}]\n    {__LV__} === [{_AA_} * {_II_} * {_EE_} * {_OO_}]\n    \\deploy serie {SERIE}  {TENGWA} {_FOREIGN_LABIALIZED_DIACRITIC_}  {__SV__} {__LV__} {NULL}\n	   \n    \\** she **\\\n		{SERIE}     === [(シェ,she)] \n		{TENGWA}    === SILME_NUQUERNA\n    {__SV__} === [{_E_}]\n    {__LV__} === [{_EE_}]\n    \\deploy serie {SERIE}  {TENGWA} {_PALATAL_}  {__SV__} {__LV__} {NULL}\n\n   \n    \\** je **\\    \n		{SERIE}     === [(ジェ,je)] \n		{TENGWA}    === ESSE_NUQUERNA\n    {__SV__} === [{_E_}]\n    {__LV__} === [{_EE_}]\n    \\deploy serie {SERIE}  {TENGWA} {_PALATAL_}  {__SV__} {__LV__} {NULL}\n  \n    \\** si **\\\n		{SERIE}     === [(スィ,si)] \n		{TENGWA}    === SILME_NUQUERNA\n    {__SV__} === [{_I_}]\n    {__LV__} === [{_II_}]\n    \\deploy serie {SERIE}  {TENGWA} {_CANCELLER_}  {__SV__} {__LV__} {NULL}\n	\n    \\** zi **\\\n		{SERIE}   === [(ズィ,zi)] \n		{TENGWA}  === ESSE_NUQUERNA\n    {__SV__}  === [{_I_}]\n    {__LV__}  === [{_II_}]\n    \\deploy serie {SERIE}  {TENGWA} {_CANCELLER_}  {__SV__} {__LV__} {NULL}\n    \n    \\** che **\\\n		{SERIE}   === [(チェ,che)] \n		{TENGWA}  === TINCO\n    {__SV__}  === [{_E_}]\n    {__LV__}  === [{_EE_}]\n    \\deploy serie {SERIE}  {TENGWA} {_PALATAL_}  {__SV__} {__LV__} {NULL}\n    \n    \\** tsa, tsi, tse, tso **\\\n    {SERIE}   === [(ツァ,tsa) * (ツィ,tsi) * (ツェ,tse) * (ツォ,tso)] 	\n		{TENGWA}  === TINCO\n    {__SV__}  === [{_A_} * {_I_} * {_E_} * {_O_}]\n    {__LV__}  === [{_AA_} * {_II_} * {_EE_} * {_OO_}]\n    \\deploy serie {SERIE}  {TENGWA} {NULL}  {__SV__} {__LV__} {_SIBILANT_}\n    \n    \\** tsyu = t sibilant + palatale + u **\\\n    {SERIE}   === [(ツュ,tsyu)] 	\n		{TENGWA}  === TINCO\n    {__SV__}  === [{_U_}]\n    {__LV__}  === [{_UU_}]\n    \\deploy serie {SERIE} {TENGWA} {_PALATAL_} {__SV__} {__LV__} {_SIBILANT_}\n    \n	  \n    \\** ti, tu **\\\n    {SERIE}   === [(ティ,ti) * (トゥ,tu)] 	\n		{TENGWA}  === TINCO\n    {__SV__}  === [{_I_} * {_U_}]\n    {__LV__}  === [{_II_} * {_UU_}]\n    \\deploy serie {SERIE} {TENGWA} {_CANCELLER_} {__SV__} {__LV__} {NULL}\n    \n    \\** tyu **\\\n    {SERIE}   === [(テュ,tyu)] 	\n		{TENGWA}  === TINCO\n    {__SV__}  === [{_U_}]\n    {__LV__}  === [{_UU_}]\n    \\deploy serie {SERIE} {TENGWA} {_CANCEL_THEN_PALATAL_} {__SV__} {__LV__} {NULL}\n\n    \\** di, du **\\\n    {SERIE}   === [(ディ,di) * (ドゥ,du)] 	\n		{TENGWA}  === ANDO\n    {__SV__}  === [{_I_} * {_U_}]\n    {__LV__}  === [{_II_} * {_UU_}]\n    \\deploy serie {SERIE} {TENGWA} {_CANCELLER_} {__SV__} {__LV__} {NULL}\n\n    \\** dyu **\\\n    {SERIE}   === [(デュ,dyu)] 	\n		{TENGWA}  === ANDO\n    {__SV__}  === [{_U_}]\n    {__LV__}  === [{_UU_}]\n    \\deploy serie {SERIE} {TENGWA} {_CANCEL_THEN_PALATAL_} {__SV__} {__LV__} {NULL}\n   \n    \\** nye **\\\n		{SERIE}   === [(ニェ,nye)]\n    {TENGWA}  === NUMEN\n    {__SV__}  === [{_E_}]\n    {__LV__}  === [{_EE_}]\n    \\deploy serie {SERIE}  {TENGWA} {_PALATAL_}  {__SV__} {__LV__} {NULL}\n\n    \\** hye **\\\n		{SERIE}   === [(ヒェ,hye)]\n    {TENGWA}  === {_H_TENGWA_}\n    {__SV__}  === [{_E_}]\n    {__LV__}  === [{_EE_}]\n    \\deploy serie {SERIE}  {TENGWA} {_PALATAL_}  {__SV__} {__LV__} {NULL}\n    \n    \\** bye **\\\n		{SERIE}   === [(ビェ,bye)]\n    {TENGWA}  === UMBAR\n    {__SV__}  === [{_E_}]\n    {__LV__}  === [{_EE_}]\n    \\deploy serie {SERIE}  {TENGWA} {_PALATAL_}  {__SV__} {__LV__} {NULL}\n\n    \\** pye **\\\n		{SERIE}   === [(ピェ,pye)]\n    {TENGWA}  === {_P_TENGWA_}\n    {__SV__}  === [{_E_}]\n    {__LV__}  === [{_EE_}]\n    \\deploy serie {SERIE}  {TENGWA} {_PALATAL_}  {__SV__} {__LV__} {NULL}\n\n    \\** fa, fi, fu, fe, fo **\\\n		{SERIE}   === [(ファ,fa) * (フィ,fi) * (フェ,fe) * (フォ,fo)] \n		{TENGWA}  === {_FOREIGN_F_}\n    {__SV__} === [{_A_} * {_I_} * {_E_} * {_O_}]\n    {__LV__} === [{_AA_} * {_II_} * {_EE_} * {_OO_}]\n    \\deploy serie {SERIE}  {TENGWA} {NULL}  {__SV__} {__LV__} {NULL}\n\n    \\** fya, fyu, fye, fyo **\\\n		{SERIE}   === [(フャ,fya) * (フュ,fyu) * (フィェ,fye) * (フョ,fyo)] \n		{TENGWA}  === {_FOREIGN_F_}\n    {__SV__} === [{_A_} * {_U_} * {_E_} * {_O_}]\n    {__LV__} === [{_AA_} * {_UU_} * {_EE_} * {_OO_}]\n    \\deploy serie {SERIE}  {TENGWA} {_PALATAL_} {__SV__} {__LV__} {NULL}\n    \n    \\** hu **\\\n		{SERIE}   === [(ホゥ,hu)]\n    {TENGWA}  === {_H_TENGWA_}\n    {__SV__}  === [{_U_}]\n    {__LV__}  === [{_UU_}]\n    \\deploy serie {SERIE} {TENGWA} {_CANCELLER_} {__SV__} {__LV__} {NULL}\n    \n    \\** mye **\\\n		{SERIE}   === [(ミェ,mye)]\n    {TENGWA}  === MALTA\n    {__SV__}  === [{_E_}]\n    {__LV__}  === [{_EE_}]\n    \\deploy serie {SERIE}  {TENGWA} {_PALATAL_}  {__SV__} {__LV__} {NULL}\n    \n    \\** rye **\\\n		{SERIE}   === [(リェ,rye)]\n    {TENGWA}  === ROMEN\n    {__SV__}  === [{_E_}]\n    {__LV__}  === [{_EE_}]\n    \\deploy serie {SERIE}  {TENGWA} {_PALATAL_}  {__SV__} {__LV__} {NULL}\n  \n    \\** la, li, lu, le, lo / sons of the patriots **\\\n		{SERIE}   === [(ラ゜,la) * (リ゜,li) * (ル゜ ,lu) * (レ゜,le) * (ロ゜,lo)] 					\n		{TENGWA}  === LAMBE\n    \\deploy serie {SERIE}  {TENGWA} {NULL} {_SHORT_VOWELS_} {_LONG_VOWELS_} {NULL}\n    \n	\\end\n  \n  \\beg rules punctuation\n    . --> PUNCT_DDOT\n		。 --> PUNCT_DDOT\n    .. --> PUNCT_DOT PUNCT_DDOT PUNCT_DOT\n    …  --> PUNCT_TILD\n    ‥  --> PUNCT_TILD \\** JP tensen **\\\n    ... --> PUNCT_TILD\n    .... --> PUNCT_TILD\n    ..... --> PUNCT_TILD\n    ...... --> PUNCT_TILD\n    ....... --> PUNCT_TILD\n\n    , --> PUNCT_DOT\n		、 --> PUNCT_DOT\n    : --> PUNCT_DOT\n    ; --> PUNCT_DOT\n    ! --> PUNCT_EXCLAM\n    ? --> PUNCT_INTERR\n    · --> PUNCT_DOT\n    ・ --> {NULL} \\** JP middle dot **\\\n    ゠ --> {NULL} \\** JP daburu haifun **\\\n\n    \\** Apostrophe **\\\n\n    \' --> {NULL}\n    ’ --> {NULL}\n    \n    \\** NBSP **\\\n    {NBSP} --> NBSP\n    \n    \\** Quotes **\\\n\n    “ --> DQUOT_OPEN\n    ” --> DQUOT_CLOSE\n    « --> DQUOT_OPEN\n    » --> DQUOT_CLOSE\n    \n    \\** JP Quotes **\\\n    「 -->  DQUOT_OPEN\n    」 -->  DQUOT_CLOSE\n\n    - --> {NULL}\n    – --> PUNCT_TILD\n    — --> PUNCT_TILD\n    \n    〜 --> PUNCT_TILD \\** JP Tild **\\\n    ～ --> PUNCT_TILD \\** JP Tild **\\\n\n    [ --> PUNCT_PAREN_L\n    ] --> PUNCT_PAREN_R\n    ( --> PUNCT_PAREN_L\n    ) --> PUNCT_PAREN_R\n    { --> PUNCT_PAREN_L\n    } --> PUNCT_PAREN_R\n    < --> PUNCT_PAREN_L\n    > --> PUNCT_PAREN_R\n    \n    \\** JP Paren **\\\n   （  --> PUNCT_PAREN_L\n    ） --> PUNCT_PAREN_R\n    (［,〔,｛,｟,〈,《,【,〖,〘,〚) --> PUNCT_PAREN_L   \n    (］,〕,｝,｠,〉,》,】,〗,〙,〛) --> PUNCT_PAREN_R\n\n    \\** Not universal between fonts ... **\\\n    $ --> ELVISH_PAREN\n    ≤ --> RING_MARK_L \\** Ring inscription left beautiful stuff **\\\n    ≥ --> RING_MARK_R \\** Ring inscription right beautiful stuff **\\\n\n	\\end\n  \n  \\beg rules \"numbers\"\n    (〇,零) --> NUM_0\n    一 --> NUM_1\n    二 --> NUM_2\n    三 --> NUM_3\n    四 --> NUM_4	\n    五 --> NUM_5	\n    六 --> NUM_6	\n    七 --> NUM_7	\n    八 --> NUM_8	\n    九 --> NUM_9	\n    十 --> NUM_1 CIRC_TEHTA_INF\n    百 --> NUM_2 CIRC_TEHTA_INF\n    千 --> NUM_3 CIRC_TEHTA_INF\n    万 --> NUM_4 CIRC_TEHTA_INF\n    億 --> NUM_9 CIRC_TEHTA_INF\n    0 --> NUM_0\n    1 --> NUM_1\n    2 --> NUM_2\n    3 --> NUM_3\n    4 --> NUM_4\n    5 --> NUM_5\n    6 --> NUM_6\n    7 --> NUM_7\n    8 --> NUM_8\n    9 --> NUM_9\n  \\end\n  \n\\end\n\n\n\n\\beg postprocessor\n  \\resolve_virtuals\n\\end"