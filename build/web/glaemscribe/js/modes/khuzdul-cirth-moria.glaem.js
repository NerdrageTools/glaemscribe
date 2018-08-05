Glaemscribe.resource_manager.raw_modes["khuzdul-cirth-moria"] = "\\**\n\nGlǽmscribe (also written Glaemscribe) is a software dedicated to\nthe transcription of texts between writing systems, and more \nspecifically dedicated to the transcription of J.R.R. Tolkien\'s \ninvented languages to some of his devised writing systems.\n\nCopyright (C) 2015 Benjamin Babut (Talagan).\n\nThis program is free software: you can redistribute it and/or modify\nit under the terms of the GNU Affero General Public License as published by\nthe Free Software Foundation, either version 3 of the License, or\nany later version.\n\nThis program is distributed in the hope that it will be useful,\nbut WITHOUT ANY WARRANTY; without even the implied warranty of\nMERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\nGNU Affero General Public License for more details.\n\nYou should have received a copy of the GNU Affero General Public License\nalong with this program.  If not, see <http://www.gnu.org/licenses/>.\n\n**\\\n\n\\beg changelog\n  \\entry \"0.0.2\", \"Moved outspace character to general element\"\n  \\entry \"0.0.3\", \"Adding missing long ô\"\n\\end\n\n\\language \"Khuzdul\"\n\\writing  \"Cirth\"\n\\mode     \"Khuzdul Cirth - Angerthas Moria\"\n\\version  \"0.0.3\"\n\\authors  \"J.R.R. Tolkien, impl. Talagan (Benjamin Babut)\"\n\n\\world      arda\n\\invention  jrrt\n\n\\charset  cirth_ds true\n\n\\** We redefine the output space to have something beautiful, especially with erebor1 and erebor2 **\\ \n\\outspace CIRTH_SPACE_BIG\n\n\\beg      preprocessor\n  \\** Work exclusively downcase **\\\n  \\downcase\n  \n  \\** Simplify trema vowels **\\\n  \\substitute \"ä\" \"a\"\n  \\substitute \"ë\" \"e\"\n  \\substitute \"ï\" \"i\"\n  \\substitute \"ö\" \"o\"\n  \\substitute \"ü\" \"u\"\n  \\substitute \"ÿ\" \"y\"\n  \n  \\** Dis-ambiguate long vowels **\\\n  \\rxsubstitute \"(ā|â|aa)\" \"â\"\n  \\rxsubstitute \"(ē|ê|ee)\" \"ê\"\n  \\rxsubstitute \"(ī|î|ii)\" \"î\"\n  \\rxsubstitute \"(ō|ô|oo)\" \"ô\"\n  \\rxsubstitute \"(ū|û|uu)\" \"û\"\n  \\rxsubstitute \"(ȳ|ŷ|yy)\" \"ŷ\"\n\\end\n\n\\beg      processor\n\n  \\beg    rules litteral\n    a --> CIRTH_48\n    â --> CIRTH_49\n    \n    e --> CIRTH_46\n    ê --> CIRTH_47\n\n    i --> CIRTH_39\n    î --> CIRTH_39 CIRTH_39\n\n    o --> CIRTH_50\n    ô --> CIRTH_51\n\n    u --> CIRTH_42\n    û --> CIRTH_43\n\n    b   --> CIRTH_2\n    d   --> CIRTH_9\n    f   --> CIRTH_3\n    g   --> CIRTH_19\n    h   --> CIRTH_34\n    gh  --> CIRTH_19 CIRTH_34\n    k   --> CIRTH_18\n    l   --> CIRTH_31\n    m   --> CIRTH_6\n    n   --> CIRTH_22\n    nd  --> CIRTH_33\n    r   --> CIRTH_12\n    s   --> CIRTH_54\n    t   --> CIRTH_8\n    sh  --> CIRTH_15\n    th  --> CIRTH_8 CIRTH_59\n    z   --> CIRTH_17\n\n    k   --> CIRTH_18\n    kh  --> CIRTH_18 CIRTH_59    \n  \\end\n  \n  \\beg    rules punctuation\n    . --> CIRTH_PUNCT_THREE_DOTS\n    .. --> CIRTH_PUNCT_THREE_DOTS\n    ... --> CIRTH_PUNCT_THREE_DOTS\n    …   --> CIRTH_PUNCT_THREE_DOTS\n    .... --> CIRTH_PUNCT_THREE_DOTS\n    ..... --> CIRTH_PUNCT_THREE_DOTS\n    ...... --> CIRTH_PUNCT_THREE_DOTS\n    ....... --> CIRTH_PUNCT_THREE_DOTS\n\n    , --> CIRTH_PUNCT_MID_DOT\n    : --> CIRTH_PUNCT_TWO_DOTS\n    ; --> CIRTH_PUNCT_TWO_DOTS\n    ! --> CIRTH_PUNCT_THREE_DOTS\n    ? --> CIRTH_PUNCT_THREE_DOTS\n    · --> CIRTH_PUNCT_MID_DOT\n\n    - --> CIRTH_PUNCT_MID_DOT\n    – --> CIRTH_PUNCT_TWO_DOTS  \n    — --> CIRTH_PUNCT_TWO_DOTS\n\n    \\** Apostrophe **\\\n\n    \' --> {NULL}\n    ’ --> {NULL}\n\n    \\** Quotes **\\\n\n    “ --> {NULL}\n    ” --> {NULL}\n    « --> {NULL} \n    » --> {NULL} \n\n    [ --> CIRTH_PUNCT_THREE_DOTS_L\n    ] --> CIRTH_PUNCT_THREE_DOTS_L\n    ( --> CIRTH_PUNCT_THREE_DOTS_L\n    ) --> CIRTH_PUNCT_THREE_DOTS_L\n    { --> CIRTH_PUNCT_THREE_DOTS_L\n    } --> CIRTH_PUNCT_THREE_DOTS_L\n    < --> CIRTH_PUNCT_THREE_DOTS_L\n    > --> CIRTH_PUNCT_THREE_DOTS_L\n\n    / --> CIRTH_PUNCT_FOUR_DOTS\n  \\end\n\\end\n"