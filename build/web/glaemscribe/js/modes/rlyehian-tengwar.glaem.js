Glaemscribe.resource_manager.raw_modes["rlyehian-tengwar"] = "\\**\n\nGlǽmscribe (also written Glaemscribe) is a software dedicated to\nthe transcription of texts between writing systems, and more \nspecifically dedicated to the transcription of J.R.R. Tolkien\'s \ninvented languages to some of his devised writing systems.\n\nCopyright (C) 2015 Benjamin Babut (Talagan).\n\nThis program is free software: you can redistribute it and/or modify\nit under the terms of the GNU Affero General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\nany later version.\n\nThis program is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU Affero General Public License for more details.\n\nYou should have received a copy of the GNU Affero General Public License\nalong with this program.  If not, see <http://www.gnu.org/licenses/>.\n\n**\\\n\n\\** largely based on the Cthuvian dictionary compiled by cyberangel at yog-sothoth forums **\\\n\\** Discussion on the incatena forum : http://www.incatena.org/viewtopic.php?f=4&t=37194&start=1225 **\\\n\\** This reconstruction : http://conworkshop.info/view_language.php?l=RLH **\\\n\n\\** Changelog **\\\n\n\\**  R\'lyehian mode for glaemscribe : a non-euclidian joke, muhahahaha **\\\n\n\\beg changelog\n  \\entry \"0.0.1\" \"First version\"\n	\\entry \"0.0.2\" \"Ported to virtual chars\"\n	\\entry \"0.0.3\" \"Ported to various charsets\"\n  \\entry \"0.1.1\" \"Added support for inlined raw tengwar\"\n  \\entry \"0.1.2\" \"Added support for new unicode charsets\"   \n\\end\n\n\\language \"R\'lyehian\"\n\\writing  \"Tengwar\"\n\\mode     \"R\'lyehian Tengwar - G*\"\n\\version  \"0.1.2\"\n\\authors  \"H.P.Lovecraft & The Great Ancient Gods, impl. Fthalagn\"\n\n\\world      other_world\n\\invention  experimental\n\n\\raw_mode \"raw-tengwar\"\n\n\\charset  tengwar_ds_sindarin true\n\\charset  tengwar_ds_parmaite false\n\\charset  tengwar_ds_eldamar  false\n\\charset  tengwar_ds_annatar  false\n\\charset  tengwar_ds_elfica   false\n\n\\charset  tengwar_guni_sindarin false\n\\charset  tengwar_guni_parmaite false\n\\charset  tengwar_guni_eldamar  false\n\\charset  tengwar_guni_annatar  false\n\\charset  tengwar_guni_elfica   false\n\n\\charset  tengwar_freemono    false\n\n\n\n\\beg      options\n\\end\n\n\\beg      preprocessor\n  \\** Work exclusively downcase **\\\n  \\downcase\n  \n  \\** Simplify trema vowels **\\\n  \\substitute \"ä\" \"a\"\n  \\substitute \"ë\" \"e\"\n  \\substitute \"ï\" \"i\"\n  \\substitute \"ö\" \"o\"\n  \\substitute \"ü\" \"u\"\n  \\substitute \"ÿ\" \"y\"\n\\end\n\n\\** Use H as gutturals **\\\n\n\n\\**\n\nHPL :\n-----\nPh\'nglui mglw\'nafh Cthulhu R\'lyeh wgah\'nagl fhtagn\nYgnaiih ... ygnaiih ... thflthkh\'ngha ... Yog-Sothoth ... y\'bthnk .. h\'ehye-n\'grkdl\'lh\nN\'gai, n\'gha\'ghaa, bugg-shoggog, y\'hah, Yog-Sothoth\nY\'ai \'ng\'ngah, Yog-Sothoth h\'ee - l\'geb f\'ai throdog uaaah\nogthrod ai\'f geb\'l - ee\'h Yog-Sothoth \'ngah\'ng ai\'y zhro\n\n\nDERLETH (The Return of Hastur) :\n--------------------------------\nCthulhu naflfhtagn\n\nCAMPBELL (The Moon-Lens) :\n--------------------------\nGof\'nn hupadgh Shub-Niggurath\n\nBRUNNER (Concerning the Forthcoming) :\n--------------------------------------\nLlllll-nglui, nnnn-lagl, fhtagn-ngah, ai Yog-Sothoth!\n\nPEREZ (The Likeness) :\n----------------------\nIa! Vthyarilops! Ut ftaghu wk\'hmr Vthyarilops! Ia! Ia!\n\nGLASBY (Return to Y\'ha-nthlei) :\n--------------------------------\nShtunggli grah\'nn fhhui Y\'ha-nthlei vra Dagon chtenff.\n\nKUTTNER (The Salem Horror):\n---------------------------\nYa na kadishtu nilgh\'ri \nstell\'bsna kn\'aa Nyogtha \nk\'yarnak phlegethor\n\nLUMLEY (The Burrowers Beneath):\n-------------------------------\nYa na kadishtu nilgh\'ri stell\'bsna Nyogtha, \nK\'yarnak phlegethor l\'ebumna syha\'h n\'ghft, \nYa hai kadishtu ep r\'luh-eeh Nyogtha eeh, \ns\'uhn-ngh athg li\'hee orr\'e syha\'h.\n\nRUSSELL (Faith):\n----------------\nCthugha fm\'latgh mnahn\' hlirgh! \nCthugha ch\'nw hafh\'drn! \nCthugha fm\'latgh uh\'e wfaqa!\n\nVESTER (Innsmouth\'s gold):\n--------------------------\nCthulhu fhtagn - G\'thugha w\'gah! \nNg\'goka y\'gotha ooboshu R\'lyeh! \nCthulhu fhtagn! Fhtagn!\n\nCLORE (The Dying God):\n----------------------\nsll\'ha-gn\'wgn-ll\'ah-sgn\'wahl\n\nI vs Y :\n========\nY looks like a semi vowel after consonants (r\'lyeh) but \nsometimes found as a vowel  \n\nC vs K : \n========\nWe should probably use c == k\n\n\n\'  Glottal stop\n+h cthuvianisation (aspiration + pharyngalisation)\n\na i u o e w\n\n\nb\nd\nc ch\nk kh\ng gh\nh hh hy\nl lh ly\nf fh\nn \nm\np ph\nr rh\ns sh\nt th\nz zh\n\ny palatal semi vowel ?\n\n**\\\n\n\\beg      processor\n\n  \\beg    rules litteral  \n    {VOWELS}            === a               *  e              * i              * o              *  u  * w\n\n    {O_LOOP}        === O_TEHTA\n    {U_LOOP}        === U_TEHTA\n       \n    {TEHTAR}            === A_TEHTA      * E_TEHTA      * I_TEHTA    * O_TEHTA     * U_TEHTA * SEV_TEHTA\n  \n    [{VOWELS}]          --> TELCO [{TEHTAR}]  \\** Replace isolated short vowels **\\\n  \n    {WDIPHTHONGS}       === {NULL} \n    {WDIPHTHENGS}       === {NULL}\n      \n    {V_D_KER}           === [ {VOWELS} {WDIPHTHONGS} ]\n    {V_D_KER_WN}        === [ {VOWELS} {WDIPHTHONGS} * {NULL} ]\n\n    {V_D_IMG}        === [ {TEHTAR} {WDIPHTHENGS} ]\n    {V_D_IMG_WN}     === [ {TEHTAR} {WDIPHTHENGS} * {NULL} ] \n  \n    {L1_KER_1}        === t                   * p  \n    {L1_IMG_1}        === TINCO               * PARMA\n    {L1_KER_2}        === (c,k)                   \n    {L1_IMG_2}        === CALMA               \n    \n    \\** NORMAL **\\\n    [ {L1_KER_1} ] [{NULL} * h] {V_D_KER_WN}  --> [ {L1_IMG_1} ] [{NULL} * GEMINATE_SIGN_TILD] {V_D_IMG_WN}\n    [ {L1_KER_2} ] [{NULL} * h] {V_D_KER_WN}  --> [ {L1_IMG_2} ] [{NULL} * GEMINATE_SIGN_TILD] {V_D_IMG_WN}\n\n    {L2_KER}        === d      * b        * g      \n    {L2_IMG}        === ANDO   * UMBAR    * ANGA    \n    [ {L2_KER} ] [{NULL} * h] {V_D_KER_WN}  --> [ {L2_IMG} ] [{NULL} * GEMINATE_SIGN_TILD] {V_D_IMG_WN}\n  \n    {L3_KER} === f\n    {L3_IMG} === FORMEN\n    [ {L3_KER} ] [{NULL} * h] {V_D_KER_WN}  --> [ {L3_IMG} ] [{NULL} * GEMINATE_SIGN_TILD] {V_D_IMG_WN}\n \n    {L5_KER}  === n     * m     \n    {L5_IMG}  === NUMEN * MALTA \n    [ {L5_KER} ] [{NULL} * h] {V_D_KER_WN}  --> [ {L5_IMG} ] [{NULL} * GEMINATE_SIGN_TILD] {V_D_IMG_WN}\n  \n    r [{NULL} * y * h] {V_D_KER_WN} --> ROMEN [{NULL} * PALATAL_SIGN * GEMINATE_SIGN_TILD] {V_D_IMG_WN}\n    s {V_D_KER_WN} --> SILME_NUQUERNA {V_D_IMG_WN}\n    z {V_D_KER_WN} --> ESSE_NUQUERNA {V_D_IMG_WN}\n\n    l [{NULL} * y * h] {V_D_KER_WN} --> LAMBE [{NULL} * PALATAL_SIGN * GEMINATE_SIGN_TILD] {V_D_IMG_WN}\n    h [{NULL} * y * h] {V_D_KER_WN} --> AHA [{NULL} * PALATAL_SIGN * GEMINATE_SIGN_TILD] {V_D_IMG_WN}\n    v [{NULL} * y * h] {V_D_KER_WN} --> VALA [{NULL} * PALATAL_SIGN * GEMINATE_SIGN_TILD] {V_D_IMG_WN}\n \n    y {V_D_KER_WN} --> VILYA {V_D_IMG_WN}\n\n    \' --> HARP_SHAPED\n    ’ --> HARP_SHAPED\n\n  \\end\n  \n  \\beg rules punctutation\n    . --> PUNCT_DDOT\n    .. --> PUNCT_DOT PUNCT_DDOT PUNCT_DOT\n    …  --> PUNCT_TILD\n    ... --> PUNCT_TILD\n    .... --> PUNCT_TILD\n    ..... --> PUNCT_TILD\n    ...... --> PUNCT_TILD\n    ....... --> PUNCT_TILD\n\n    , --> PUNCT_DOT\n    : --> PUNCT_DOT\n    ; --> PUNCT_DOT\n    ! --> PUNCT_EXCLAM\n    ? --> PUNCT_INTERR\n    · --> PUNCT_DOT\n    \n    \\** NBSP **\\\n    {NBSP} --> NBSP\n    \n    \\** Quotes **\\\n\n    “ --> DQUOT_OPEN\n    ” --> DQUOT_CLOSE\n    « --> DQUOT_OPEN \n    » --> DQUOT_CLOSE \n    \n    - --> PUNCT_DOT    \n    – --> PUNCT_TILD  \n    — --> PUNCT_DTILD\n \n    [ --> PUNCT_PAREN_L\n    ] --> PUNCT_PAREN_R\n    ( --> PUNCT_PAREN_L\n    ) --> PUNCT_PAREN_R\n    { --> PUNCT_PAREN_L\n    } --> PUNCT_PAREN_R\n    < --> PUNCT_PAREN_L\n    > --> PUNCT_PAREN_R  \n\n    \\** Not universal between fonts ... **\\\n    $ --> BOOKMARK_SIGN\n    ≤ --> RING_MARK_L \\** Ring inscription left beautiful stuff **\\\n    ≥ --> RING_MARK_R \\** Ring inscription right beautiful stuff **\\\n  \\end\n\n  \\beg rules numbers\n    0 --> NUM_0\n    1 --> NUM_1\n    2 --> NUM_2\n    3 --> NUM_3\n    4 --> NUM_4\n    5 --> NUM_5\n    6 --> NUM_6\n    7 --> NUM_7\n    8 --> NUM_8\n    9 --> NUM_9\n    A --> NUM_10\n    B --> NUM_11   \n  \\end\n	\n\\end\n\n\n\\beg postprocessor\n  \\resolve_virtuals\n\\end  \n"