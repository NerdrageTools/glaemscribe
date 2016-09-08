#!/usr/bin/env ruby

require "rubygems"
require "JSON"

SCRIPT_PATH = File.dirname(__FILE__)
require SCRIPT_PATH + "/../../lib_rb/glaemscribe.rb"

Glaemscribe::API::Debug.enabled = false

DIACRITIC_TABLE = {
  "A_TEHTA"         => { names: ["A_TEHTA"],          classes: ["A_TEHTA_XS",        "A_TEHTA_S",        "A_TEHTA_L",        "A_TEHTA_XL"] },
  "A_TEHTA_DOUBLE"  => { names: ["A_TEHTA_DOUBLE"] ,  classes: ["A_TEHTA_DOUBLE_XS", "A_TEHTA_DOUBLE_S", "A_TEHTA_DOUBLE_L", "A_TEHTA_DOUBLE_XL"]  },                           
  "A_TEHTA_CIRCUM"  => { names: ["A_TEHTA_CIRCUM"] ,  classes: ["A_TEHTA_CIRCUM_XS", "A_TEHTA_CIRCUM_S", "A_TEHTA_CIRCUM_L", "A_TEHTA_CIRCUM_XL"] },
  "E_TEHTA"         => { names: ["E_TEHTA"] ,         classes: ["E_TEHTA_XS",        "E_TEHTA_S",        "E_TEHTA_L",        "E_TEHTA_XL"] },
  "E_TEHTA_DOUBLE"  => { names: ["E_TEHTA_DOUBLE"] ,  classes: ["E_TEHTA_DOUBLE_XS", "E_TEHTA_DOUBLE_S", "E_TEHTA_DOUBLE_L", "E_TEHTA_DOUBLE_XL"] },
  "I_TEHTA"         => { names: ["I_TEHTA"] ,         classes: ["I_TEHTA_XS",        "I_TEHTA_S",        "I_TEHTA_L",        "I_TEHTA_XL"] },
  "I_TEHTA_DOUBLE"  => { names: ["I_TEHTA_DOUBLE"] ,  classes: ["I_TEHTA_DOUBLE_XS", "I_TEHTA_DOUBLE_S", "I_TEHTA_DOUBLE_L", "I_TEHTA_DOUBLE_XL"] },
  "O_TEHTA"         => { names: ["O_TEHTA"] ,         classes: ["O_TEHTA_XS",        "O_TEHTA_S",        "O_TEHTA_L",        "O_TEHTA_XL"] },
  "O_TEHTA_DOUBLE"  => { names: ["O_TEHTA_DOUBLE"] ,  classes: ["O_TEHTA_DOUBLE_XS", "O_TEHTA_DOUBLE_S", "O_TEHTA_DOUBLE_L", "O_TEHTA_DOUBLE_XL"] },
  "U_TEHTA"         => { names: ["U_TEHTA"] ,         classes: ["U_TEHTA_XS",        "U_TEHTA_S",        "U_TEHTA_L",        "U_TEHTA_XL"] },
  "U_TEHTA_DOUBLE"  => { names: ["U_TEHTA_DOUBLE"] ,  classes: ["U_TEHTA_DOUBLE_XS", "U_TEHTA_DOUBLE_S", "U_TEHTA_DOUBLE_L", "U_TEHTA_DOUBLE_XL"] },
  "Y_TEHTA"         => { names: ["Y_TEHTA"] ,         classes: ["Y_TEHTA_XS",        "Y_TEHTA_S",        "Y_TEHTA_L",        "Y_TEHTA_XL"] },
  "SEV_TEHTA"       => { names: ["SEV_TEHTA"] ,       classes: ["THSUP_SEV_XS",      "THSUP_SEV_S",      "THSUP_SEV_L",      "THSUP_SEV_XL"] },
                                
  "A_TEHTA_INF"     => { names: ["A_TEHTA_INF"] ,     classes:  ["THINF_TDOT_XS", "THINF_TDOT_S", "THINF_TDOT_L", "THINF_TDOT_XL"] },
  "E_TEHTA_INF"     => { names: ["E_TEHTA_INF"] ,     classes:  ["THINF_ACCENT_XS", "THINF_ACCENT_S", "THINF_ACCENT_L", "THINF_ACCENT_XL"] },
  "O_TEHTA_INF"     => { names: ["O_TEHTA_INF"] ,     classes:  ["THINF_CURL_XS", "THINF_CURL_S", "THINF_CURL_L", "THINF_CURL_XL"] },
  "U_TEHTA_INF"     => { names: ["U_TEHTA_INF"] ,     classes:  ["THINF_CURL_INV_XS", "THINF_CURL_INV_S", "THINF_CURL_INV_L", "THINF_CURL_INV_XL"] },
  "CIRC_TEHTA_INF"  => { names: ["CIRC_TEHTA_INF"] ,  classes:  ["TH_SUB_CIRC_XS", "TH_SUB_CIRC_S", "TH_SUB_CIRC_L", "TH_SUB_CIRC_XL"] },
  "SEV_TEHTA_INF"   => { names: ["SEV_TEHTA_INF"] ,   classes:  ["THINF_STROKE_XS", "THINF_STROKE_S", "THINF_STROKE_L", "THINF_STROKE_XL"] },
    
  "Y_TEHTA_INF"         => { names: ["Y_TEHTA_INF","PALATAL_SIGN "] ,         classes:  ["THINF_DDOT_XS", "THINF_DDOT_S", "THINF_DDOT_L", "THINF_DDOT_XL", "LAMBE_MARK_DDOT"] },
  "E_TEHTA_DOUBLE_INF"  => { names: ["E_TEHTA_DOUBLE_INF","GEMINATE_DOUBLE"], classes: ["THINF_DSTROKE_XS" , "THINF_DSTROKE_S" ,"THINF_DSTROKE_L" , "THINF_DSTROKE_XL"  , "LAMBE_MARK_DSTROKE"] },
  "I_TEHTA_INF"         => { names: ["I_TEHTA_INF","NO_VOWEL_DOT"],           classes: ["THINF_DOT_XS" , "THINF_DOT_S" ,"THINF_DOT_L" , "THINF_DOT_XL"  , "LAMBE_MARK_DOT"] },
                                  
  "GEMINATE_SIGN"   => { names: ["GEMINATE_SIGN"] , classes: ["DASH_INF_S",   "DASH_INF_L",  "LAMBE_MARK_TILD"] },
  "NASALIZE_SIGN"   => { names: ["NASALIZE_SIGN"] , classes: ["DASH_SUP_S",   "DASH_SUP_L"] },
  "NASALIZE_SIGN_TILD"   => { names: ["NASALIZE_SIGN_TILD"] , classes: ["TILD_SUP_S",   "TILD_SUP_L"] },
  "ALVEOLAR_SIGN"   => { names: ["ALVEOLAR_SIGN"] , classes: ["SHOOK_LEFT_L", "SHOOK_RIGHT_L"] }
}

SIMILARS = [
   ["A_TEHTA" , "A_TEHTA_DOUBLE", "A_TEHTA_CIRCUM", "E_TEHTA" , "E_TEHTA_DOUBLE", "I_TEHTA" , "I_TEHTA_DOUBLE", "O_TEHTA" , "O_TEHTA_DOUBLE", "U_TEHTA", "U_TEHTA_DOUBLE", "Y_TEHTA" ],
   ["SEV_TEHTA"],
   ["A_TEHTA_INF" ,"E_TEHTA_INF" ,"CIRC_TEHTA_INF"  ,"SEV_TEHTA_INF", "O_TEHTA_INF", "U_TEHTA_INF"],
   ["Y_TEHTA_INF" ,"E_TEHTA_DOUBLE_INF","I_TEHTA_INF"],
   ["GEMINATE_SIGN"],
   ["NASALIZE_SIGN", "NASALIZE_SIGN_TILD"],
   ["ALVEOLAR_SIGN"],
]

  
BEARER_TABLE = [
  "TELCO", "ARA", 
  "TINCO", "PARMA", "CALMA", "QUESSE",
  "ANDO", "UMBAR", "ANGA", "UNGWE",
  "SULE", "FORMEN", "AHA", "HWESTA",
  "ANTO", "AMPA", "ANCA", "UNQUE",
  "NUMEN", "MALTA", "NOLDO", "NWALME",
  "ORE","VALA","ANNA","VILYA",
  "TW_EXT_11","TW_EXT_12","TW_EXT_13","TW_EXT_14",
  "TW_EXT_21","TW_EXT_22","TW_EXT_23","TW_EXT_24",
  
  "ROMEN","ARDA",
  "LAMBE","ALDA",
  
  "SILME","SILME_NUQUERNA","SILME_NUQUERNA_ALT", "ESSE","ESSE_NUQUERNA",
  "HYARMEN", "HWESTA_SINDARINWA",
  "YANTA","URE",

  "OSSE",
  
  "SHOOK_BEAUTIFUL",
  "ANCA_CLOSED",
  "HARP_SHAPED",
  "AHA_TINCO", "HWESTA_TINCO" 
]          

def dump_charset_edit_page(charset, font_list)
File.open("#{charset.name}.html","wb") { |f|
  
  f.puts "<!doctype HTML>";
  f.puts "<html>"
  f.puts "<head>"
  f.puts '<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />'
  f.puts "<style>"
  
  font_list.each_with_index{|font,i|
    f.puts ".font#{i} { font-family: '#{font}'; }"
  }
  
  f.puts ".eldamar  { font-family: 'Tengwar Eldamar Glaemscrafu'}"
  f.puts ".zetable, .zetable td  { border: solid 1px black; border-collapse: collapse; padding :5px}"
  f.puts "</style>"
  f.puts "<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js'></script>"
  f.puts "<script src='chart.js'></script>"
  f.puts "</head>"
  f.puts "<body>"
  f.puts "<table class='zetable'>"

  f.puts "<tr>"
  f.puts "<td></td>"
  SIMILARS.each{ |serie|
    first = serie.first
    desc = DIACRITIC_TABLE[first]
    f.puts "<td style='font-size:8px'>#{desc[:names].join("<br>")}</td>"
  }
  f.puts "</tr>"

  BEARER_TABLE.each { |b|
    f.puts "<tr style='white-space:nowrap'>"
    f.puts "<td>#{b}</td>"
    SIMILARS.each{ |serie|
      first = serie.first
      desc  = DIACRITIC_TABLE[first]
      names = desc[:names]
      classes = desc[:classes]
      
      k = names[0]
      target  = nil
      
      vchar   = charset[k.to_s]
      
      tnames = nil
      if vchar
        target  = vchar[b]
        tnames  = target.names if target
      end 
      
      f.puts "<td>"
      f.puts "<div class='tlist' style='display:inline-flex'>"
      classes.each { |v|
                       
        tnames = tnames || []
        checked = tnames.include? v
        
        f.puts "<div style='float:left;text-align:center;display:inline-block'>"
        
        font_list.each_with_index { |font,i|
          f.puts "<div class='font#{i}'>"
          f.puts "#{charset[b].str}#{charset[v].str}"
          f.puts "</div>"
        }
        f.puts "<div>"
        f.puts "<input type='radio' name='#{k}[#{b}]' " + ((checked)?("checked"):("")) + " data-master='#{k}' data-bearer='#{b}' value='#{v}' />"
        f.puts "</div>"
        
        f.puts "</div>"
      }
      f.puts "</div>"
      f.puts "</td>"
    }
    f.puts "</tr>"
  }
  
  f.puts "</table>"
  f.puts "<div><button class='dumper'>Dump</button></div><br/><br/>"
  f.puts "<code class='dump_zone' style='white-space: pre;'></code>";
  
  f.puts "<script>"
  f.puts "var SIMILARS        = #{SIMILARS.to_json};"
  f.puts "var DIACRITIC_TABLE = #{DIACRITIC_TABLE.to_json};"
  
  f.puts "</script>"
  
  f.puts "</body>"
  f.puts "</html>"
  
}
end


Glaemscribe::API::ResourceManager.load_charsets(["tengwar_ds","tengwar_ds_eldamar"])

dump_charset_edit_page(Glaemscribe::API::ResourceManager.loaded_charsets["tengwar_ds"],         ["Tengwar Sindarin Glaemscrafu"])
dump_charset_edit_page(Glaemscribe::API::ResourceManager.loaded_charsets["tengwar_ds_eldamar"], ["Tengwar Eldamar Glaemscrafu"])


