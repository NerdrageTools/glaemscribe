Glaemscribe.resource_manager.raw_modes["westron-tengwar-glaemscrafu"] = "\\**\n\nGlǽmscribe (also written Glaemscribe) is a software dedicated to\nthe transcription of texts between writing systems, and more \nspecifically dedicated to the transcription of J.R.R. Tolkien\'s \ninvented languages to some of his devised writing systems.\n\nCopyright (C) 2015 Benjamin Babut (Talagan).\n\nThis program is free software: you can redistribute it and/or modify\nit under the terms of the GNU Affero General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\nany later version.\n\nThis program is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU Affero General Public License for more details.\n\nYou should have received a copy of the GNU Affero General Public License\nalong with this program.  If not, see <http://www.gnu.org/licenses/>.\n\n**\\\n\n\\beg changelog\n  \\entry \"0.0.2\" \"Correcting ts/ps sequences to work better with eldamar\"\n  \\entry \"0.0.3\" \"Porting to virtual chars\"\n  \\entry \"0.0.4\" \"Added charset support for Annatar\"\n  \\entry \"0.0.5\" \"Added support for the FreeMonoTengwar font\" \n  \\entry \"0.1.0\" \"Added support for the Tengwar Elfica font\"\n  \\entry \"0.1.1\" \"Added support for inlined raw tengwar\"  \n  \\entry \"0.1.2\" \"Added support for non-breaking spaces\"   \n  \\entry \"0.1.3\" \"Added support for new unicode charsets\"   \n  \\entry \"0.1.4\" \"Added support for the Tengwar Telcontar font\"\n\\end\n\n\\**  Westron mode for glaemscribe (MAY BE INCOMPLETE) **\\\n\\language Westron\n\\writing  Tengwar\n\\mode     \"Westron Tengwar - G*\"\n\\version  \"0.1.4\"\n\\authors  \"Talagan (Benjamin Babut), based on J.R.R. Tolkien\"\n\n\\world      arda\n\\invention  experimental\n\n\\raw_mode \"raw-tengwar\"\n\n\\charset  tengwar_ds_sindarin true\n\\charset  tengwar_ds_parmaite false\n\\charset  tengwar_ds_eldamar  false\n\\charset  tengwar_ds_annatar  false\n\\charset  tengwar_ds_elfica   false\n\n\\charset  tengwar_guni_sindarin false\n\\charset  tengwar_guni_parmaite false\n\\charset  tengwar_guni_eldamar  false\n\\charset  tengwar_guni_annatar  false\n\\charset  tengwar_guni_elfica   false\n\n\\charset  tengwar_freemono    false\n\\charset  tengwar_telcontar   false\n\n\\beg      options\n\n  \\beg option reverse_o_u_tehtar U_UP_O_DOWN\n    \\value O_UP_U_DOWN 1\n    \\value U_UP_O_DOWN 2\n  \\end\n  \\beg option consonant_modification_style CONSONANT_MODIFICATION_STYLE_BAR\n    \\value CONSONANT_MODIFICATION_STYLE_WAVE 0\n    \\value CONSONANT_MODIFICATION_STYLE_BAR 1\n  \\end\n\n  \\option reverse_numbers true\n  \\beg option numbers_base BASE_12\n    \\value    BASE_10 10\n    \\value    BASE_12 12\n  \\end\n  \n\\end\n\n\\beg      preprocessor\n  \\** Work exclusively downcase **\\\n  \\downcase\n  \n  \\** Simplify trema vowels **\\\n  \\substitute \"ä\" \"a\"\n  \\substitute \"ë\" \"e\"\n  \\substitute \"ï\" \"i\"\n  \\substitute \"ö\" \"o\"\n  \\substitute \"ü\" \"u\"\n  \\substitute \"ÿ\" \"y\"\n  \n  \\** Dis-ambiguate long vowels **\\\n  \\rxsubstitute \"(ā|â|aa)\" \"á\"\n  \\rxsubstitute \"(ē|ê|ee)\" \"é\"\n  \\rxsubstitute \"(ī|î|ii)\" \"í\"\n  \\rxsubstitute \"(ō|ô|oo)\" \"ó\"\n  \\rxsubstitute \"(ū|û|uu)\" \"ú\"\n  \\rxsubstitute \"(ȳ|ŷ|yy)\" \"ý\"\n  \n  \\** Preprocess numbers **\\\n  \\elvish_numbers \"\\\\eval numbers_base\" \"\\\\eval reverse_numbers\"\n\\end\n\n\\beg      processor\n\n  \\beg    rules litteral  \n  \n    \\if \"consonant_modification_style == CONSONANT_MODIFICATION_STYLE_WAVE\"\n      {GEMINATE} === GEMINATE_SIGN_TILD\n      {NASAL}    === NASALIZE_SIGN_TILD\n    \\else\n      {GEMINATE} === GEMINATE_SIGN\n      {NASAL}    === NASALIZE_SIGN\n    \\endif\n    \n    \\if \"reverse_o_u_tehtar == U_UP_O_DOWN\"\n      {O_LOOP}        === O_TEHTA\n      {O_LOOP_DOUBLE} === O_TEHTA_DOUBLE\n      {U_LOOP}        === U_TEHTA\n      {U_LOOP_DOUBLE} === U_TEHTA_DOUBLE\n    \\else\n      {O_LOOP}        === U_TEHTA\n      {O_LOOP_DOUBLE} === U_TEHTA_DOUBLE\n      {U_LOOP}        === O_TEHTA\n      {U_LOOP_DOUBLE} === O_TEHTA_DOUBLE\n    \\endif\n  \n    {A}   === a\n    {AA}  === á\n    {E}   === e\n    {EE}  === é\n    {I}   === i\n    {II}  === í\n    {O}   === o\n    {OO}  === ó\n    {U}   === u\n    {UU}  === ú\n\n    \\** Short diphthongs **\\\n    {AI}  === {A}{I}\n    {AU}  === {A}{U}\n	  {EI}  === {E}{I}\n	  {EU}  === {E}{U}\n	  {OI}  === {O}{I}\n	  {OU}  === {O}{U}\n	  {UI}  === {U}{I}\n	  {IU}  === {I}{U}\n\n    \\** LONG diphthongs **\\      \n    {AAI} === {AA}{I} \\** âi **\\\n    {AAU} === {AA}{U} \\** âu **\\\n    {EEI} === {EE}{I} \\** êi **\\\n    {EEU} === {EE}{U} \\** êu **\\\n    {OOI} === {OO}{I} \\** ôi **\\\n    {OOU} === {OO}{U} \\** ôu **\\\n\n    {SDIPHTHONGS}  === {AI}           * {AU}          * {EI} 				    * {EU}        * {IU}        * {OI}          * {OU}        * {UI}\n    {_SDIPHTONGS_} === YANTA A_TEHTA  * URE A_TEHTA   * YANTA E_TEHTA	  * URE E_TEHTA * URE I_TEHTA * YANTA {O_LOOP} * URE {O_LOOP} * YANTA {U_LOOP}                   \n    \n    {LDIPHTHONGS}  === {AAI}              * {AAU}              * {EEI}              * {EEU}            * {OOI}              * {OOU}\n    {_LDIPHTONGS_} === ARA A_TEHTA YANTA  * ARA A_TEHTA URE    * ARA E_TEHTA YANTA  * ARA E_TEHTA URE  * ARA {O_LOOP} YANTA  * ARA {O_LOOP} URE\n                   \n    {VOWELS}      === {A}      * {E}      * {I}        * {O}        * {U}    \n    {TEHTAR}      === A_TEHTA  * E_TEHTA  * I_TEHTA    * {O_LOOP}    * {U_LOOP}\n                  \n    {LVOWELS}     === {AA}         * {EE}         * {II}         * {OO}         * {UU}\n    {LTETHAR}     === ARA A_TEHTA  * ARA E_TEHTA  * ARA I_TEHTA  * ARA {O_LOOP}  * ARA {U_LOOP} \n\n    \\** Let\' put all vowels/diphthongs in the same basket **\\\n    {V_D}         === [ {VOWELS}  * {LVOWELS} * {SDIPHTHONGS} * {LDIPHTHONGS} ]        \n    \\** And their images... **\\            \n    {_V_D_}       === [ {TEHTAR}  * {LTETHAR} * {_SDIPHTONGS_} * {_LDIPHTONGS_} ]\n \n    [{VOWELS}]      --> TELCO [{TEHTAR}]   \\** Replace isolated short vowels **\\\n    [{LVOWELS}]     --> [{LTETHAR}]    \\** Replace long vowels **\\\n    [{SDIPHTHONGS}]  --> [{_SDIPHTONGS_}]  \\** Replace short diphthongs **\\\n    [{LDIPHTHONGS}]  --> [{_LDIPHTONGS_}]  \\** Replace long diphthongs **\\\n\n    \\** ================ **\\\n    \\**    CONSONANTS    **\\\n    \\** ================ **\\     \n\n    {L1_S}         === t      * p     * ch		  * (c,k)       \n    {L1_T}         === TINCO  * PARMA * CALMA	  * QUESSE \n    \n    [{L1_S}]       -->  [ {L1_T} ]\n    [{L1_S}]{V_D}  -->  [ {L1_T} ]{_V_D_} \n	\n    {L1_G_S}         === tt			           * pp               * cch				        * (c,k)(c,k)             \n    {L1_G_T}         === TINCO {GEMINATE}  * PARMA {GEMINATE} * CALMA {GEMINATE}	* QUESSE {GEMINATE}  \n    \n    [{L1_G_S}]       -->  [ {L1_G_T} ]\n    [{L1_G_S}]{V_D}  -->  [ {L1_G_T} ]{_V_D_} \n	  \n    {L1_N_S}         === nt			        * mp              * nch				    * (n,ñ)(c,k)             \n    {L1_N_T}         === TINCO {NASAL}  * PARMA {NASAL}   * CALMA {NASAL} * QUESSE {NASAL}  \n    \n    [{L1_N_S}]       -->  [ {L1_N_T} ]\n    [{L1_N_S}]{V_D}  -->  [ {L1_N_T} ]{_V_D_} 	 \n\n    {L2_S}         === d    * b     * j	  	* g\n    {L2_T}         === ANDO * UMBAR * ANGA	* UNGWE\n		\n    [{L2_S}]       --> [{L2_T}] \n    [{L2_S}]{V_D}  --> [{L2_T}]{_V_D_} \n\n    {L2_G_S}         === dd              * bb               * jj			         * gg\n    {L2_G_T}         === ANDO {GEMINATE} * UMBAR {GEMINATE} * ANGA {GEMINATE}  * UNGWE {GEMINATE}\n		\n    [{L2_G_S}]       --> [{L2_G_T}] \n    [{L2_G_S}]{V_D}  --> [{L2_G_T}]{_V_D_} \n\n    {L2_N_S}         === nd           * mb            * nj			      * (n,ñ)g\n    {L2_N_T}         === ANDO {NASAL} * UMBAR {NASAL} * ANGA {NASAL}  * UNGWE {NASAL}\n		\n    [{L2_N_S}]       --> [{L2_N_T}] \n    [{L2_N_S}]{V_D}  --> [{L2_N_T}]{_V_D_} \n\n    \\** Alignment of tehta is not the same in the font **\\\n    \\** So we need to split the third line unfortunately **\\\n    {L3_1_S}          === (th,þ)    * (f,ph)      \n    {L3_1_T}          === SULE      * FORMEN  \n   \n    {L3_2_S}          === sh     * kh     \n    {L3_2_T}          === AHA    * HWESTA\n   \n    [{L3_1_S}]        --> [{L3_1_T}] \n    [{L3_1_S}]{V_D}   --> [{L3_1_T}]{_V_D_} \n    [{L3_2_S}]        --> [{L3_2_T}] \n    [{L3_2_S}]{V_D}   --> [{L3_2_T}]{_V_D_} \n		\n    {L3_1G_S}         === (thth,tth,þþ)    * (ff,phph,pph)\n    {L3_1G_T}         === SULE {GEMINATE}  * FORMEN {GEMINATE}\n   \n    {L3_2G_S}          === (shsh,ssh)      * (k,kh)kh\n    {L3_2G_T}          === AHA {GEMINATE}  * HWESTA {GEMINATE}\n   \n    [{L3_1G_S}]        --> [{L3_1G_T}] \n    [{L3_1G_S}]{V_D}   --> [{L3_1G_T}]{_V_D_} \n    [{L3_2G_S}]        --> [{L3_2G_T}] \n    [{L3_2G_S}]{V_D}   --> [{L3_2G_T}]{_V_D_} 		\n\n    {L3_1N_S}          === (nth,nþ)     * (nf,mf,mph)      \n    {L3_1N_T}          === SULE {NASAL} * FORMEN {NASAL}  \n   \n    {L3_2N_S}          === nsh         * (n,ñ)kh     \n    {L3_2N_T}          === AHA {NASAL} * HWESTA {NASAL}\n   \n    [{L3_1N_S}]        --> [{L3_1N_T}] \n    [{L3_1N_S}]{V_D}   --> [{L3_1N_T}]{_V_D_} \n    [{L3_2N_S}]        --> [{L3_2N_T}] \n    [{L3_2N_S}]{V_D}   --> [{L3_2N_T}]{_V_D_} \n\n    {L4_S}            === (dh,ð)    * v   	* zh	  * gh\n    {L4_T}            === ANTO      * AMPA  * ANCA	* UNQUE\n		\n    [{L4_S}]          --> [{L4_T}] \n    [{L4_S}]{V_D}     --> [{L4_T}]{_V_D_} \n\n    {L4_G_S}            === (dh,ð)(dh,ð)     * vv               * (zhzh,zzh)	     * (ghgh,ggh)\n    {L4_G_T}            === ANTO {GEMINATE}  * AMPA {GEMINATE}  * ANCA {GEMINATE}  * UNQUE {GEMINATE}\n		\n    [{L4_G_S}]          --> [{L4_G_T}] \n    [{L4_G_S}]{V_D}     --> [{L4_G_T}]{_V_D_} \n\n    {L4_N_S}            === n(dh,ð)       * (mv,nv)       * nzh	          * (n,ñ)gh\n    {L4_N_T}            === ANTO {NASAL}  * AMPA {NASAL}  * ANCA {NASAL}  * UNQUE {NASAL}\n		\n    [{L4_N_S}]          --> [{L4_N_T}] \n    [{L4_N_S}]{V_D}     --> [{L4_N_T}]{_V_D_} \n\n    {L5_S}            === n     * m     * ny     * ñ\n    {L5_T}            === NUMEN * MALTA * NOLDO  * NWALME\n		\n    [{L5_S}]          --> [{L5_T}] \n    [{L5_S}]{V_D}     --> [{L5_T}]{_V_D_} \n\n    {L5_G_S}            === nn      * mn      * (nyny,nny)   * ññ\n    {L5_G_T}            === NUMEN   * MALTA   * NOLDO        * NWALME\n		\n    [{L5_G_S}]          --> [{L5_G_T}] \n    [{L5_G_S}]{V_D}     --> [{L5_G_T}]{_V_D_} \n		\n    {L6_S}            === w  	  * y     * rr               * ww         	    * yy\n    {L6_T}            === VALA  * ANNA  * ROMEN {GEMINATE} * VALA {GEMINATE}  * ANNA {GEMINATE}\n    [r * {L6_S}]      --> [ ORE   * {L6_T}] \n    [r * {L6_S}]{V_D} --> [ ROMEN * {L6_T}]{_V_D_} \n\n    \\** This one is not useful (redundant with higher) **\\\n    \\** Keep it for clarity of mind **\\\n    r_                --> ORE\n\n    s{V_D}            --> SILME_NUQUERNA {_V_D_}  \\** Before a vowel goes down **\\\n    s                 --> SILME                   \\** Any other pos, up **\\\n    z{V_D}            --> ESSE_NUQUERNA {_V_D_}   \\** Before a vowel goes down **\\\n    z                 --> ESSE                    \\** Any other pos, up **\\\n		\n    ns{V_D}           --> SILME_NUQUERNA {NASAL} {_V_D_}\n    ns                --> SILME_NUQUERNA {NASAL}                   \n    nz{V_D}           --> ESSE_NUQUERNA {NASAL} {_V_D_}   \n    nz                --> ESSE_NUQUERNA {NASAL}                \n\n    ts                --> TINCO SARINCE\n    ps                --> PARMA SARINCE\n    (ks,cs,x)         --> QUESSE SARINCE\n\n    ts{V_D}           --> TINCO SARINCE {_V_D_}  \n    ps{V_D}           --> PARMA SARINCE {_V_D_}\n    (ks,cs,x){V_D}    --> QUESSE SARINCE {_V_D_}	\n\n    h{V_D}            --> HYARMEN {_V_D_}\n    h                 --> HYARMEN\n    hh{V_D}           --> HYARMEN {GEMINATE} {_V_D_}\n    hh                --> HYARMEN {GEMINATE}\n                      \n    l{V_D}            --> LAMBE {_V_D_}\n    l                 --> LAMBE\n                      \n    ll{V_D}           --> LAMBE {GEMINATE} {_V_D_}\n    ll                --> LAMBE {GEMINATE}\n		\n    (hl,lh){V_D}      --> ALDA {_V_D_}\n    (hl,lh)           --> ALDA		\n\n    (hr,rh){V_D}      --> ARDA {_V_D_}\n    (hr,rh)           --> ARDA	\n		\n  \\end\n  \n  \\beg rules punctutation\n    . --> PUNCT_DDOT\n    .. --> PUNCT_DOT PUNCT_DDOT PUNCT_DOT\n    …  --> PUNCT_TILD\n    ... --> PUNCT_TILD\n    .... --> PUNCT_TILD\n    ..... --> PUNCT_TILD\n    ...... --> PUNCT_TILD\n    ....... --> PUNCT_TILD\n\n    , --> PUNCT_DOT\n    : --> PUNCT_DOT\n    ; --> PUNCT_DOT\n    ! --> PUNCT_EXCLAM\n    ? --> PUNCT_INTERR\n    · --> PUNCT_DOT\n\n    \\** Apostrophe **\\\n\n    \' --> {NULL}\n    ’ --> {NULL}\n    \n    \\** NBSP **\\\n    {NBSP} --> NBSP\n    \n    \\** Quotes **\\\n\n    “ --> DQUOT_OPEN\n    ” --> DQUOT_CLOSE\n    « --> DQUOT_OPEN \n    » --> DQUOT_CLOSE \n    \n    - --> PUNCT_DOT    \n    – --> PUNCT_TILD  \n    — --> PUNCT_DTILD\n \n    [ --> PUNCT_PAREN_L\n    ] --> PUNCT_PAREN_R\n    ( --> PUNCT_PAREN_L\n    ) --> PUNCT_PAREN_R\n    { --> PUNCT_PAREN_L\n    } --> PUNCT_PAREN_R\n    < --> PUNCT_PAREN_L\n    > --> PUNCT_PAREN_R  \n\n    \\** Not universal between fonts ... **\\\n    $ --> ELVISH_PAREN\n    ≤ --> RING_MARK_L \\** Ring inscription left beautiful stuff **\\\n    ≥ --> RING_MARK_R \\** Ring inscription right beautiful stuff **\\\n  \\end\n\n  \\beg rules numbers\n    0 --> NUM_0\n    1 --> NUM_1\n    2 --> NUM_2\n    3 --> NUM_3\n    4 --> NUM_4\n    5 --> NUM_5\n    6 --> NUM_6\n    7 --> NUM_7\n    8 --> NUM_8\n    9 --> NUM_9\n    A --> NUM_10\n    B --> NUM_11   \n  \\end\n  \n\\end\n\n\\beg postprocessor\n  \\resolve_virtuals\n\\end"