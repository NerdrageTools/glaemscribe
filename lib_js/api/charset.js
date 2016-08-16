/*

Glǽmscribe (also written Glaemscribe) is a software dedicated to
the transcription of texts between writing systems, and more 
specifically dedicated to the transcription of J.R.R. Tolkien's 
invented languages to some of his devised writing systems.

Copyright (C) 2015 Benjamin Babut (Talagan).

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published by
the Free Software Foundation, either version 3 of the License, or
any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/

Glaemscribe.Char = function()
{
  return this;
}

Glaemscribe.Char.prototype.is_virtual = function()
{
  return false;
}

Glaemscribe.Char.prototype.output = function()
{
  return this.str;
}

Glaemscribe.VirtualChar = function()
{
  this.classes      = [];
  this.lookup_table = {};
  return this;
}

Glaemscribe.VirtualChar.VirtualClass = function()
{
  this.target   = '';
  this.triggers = [];
}

Glaemscribe.VirtualChar.prototype.is_virtual = function()
{
  return true;
}

Glaemscribe.VirtualChar.prototype.output = function()
{
  return Glaemscribe.VIRTUAL_CHAR_OUTPUT;
}

Glaemscribe.VirtualChar.prototype.finalize = function()
{
  var vc = this;
  
  vc.lookup_table = {};
  vc.classes.glaem_each(function(_, vclass) {
    var result_char   = vclass.target;
    var trigger_chars = vclass.triggers;
    
    trigger_chars.glaem_each(function(_,trigger_char) {
      var found = vc.lookup_table[trigger_char];
      if(found != null)
      {
        thivcs.charset.errors.push(new Glaemscribe.Glaeml.Error(vc.line, "Trigger char " + trigger_char + "found twice in virtual char."));
      }
      else
      {
        var rc = vc.charset.n2c(result_char);
        var tc = vc.charset.n2c(trigger_char);
        
        if(rc == null) {
          vc.charset.errors.push(new Glaemscribe.Glaeml.Error(vc.line, "Trigger char " + trigger_char + " points to unknown result char " + result_char + "."));
        }
        else if(tc == null) {
          vc.charset.errors.push(new Glaemscribe.Glaeml.Error(vc.line, "Unknown trigger char " + trigger_char + "."));
        }
        else if(tc instanceof Glaemscribe.VirtualChar) {
          vc.charset.errors.push(new Glaemscribe.Glaeml.Error(vc.line, "Trigger char " + trigger_char + " is virtual. This is not supported!"));          
        }
        else if(tc instanceof Glaemscribe.VirtualChar) {
          vc.charset.errors.push(new Glaemscribe.Glaeml.Error(vc.line, "Trigger char " + trigger_char + " points to another virtual char " + result_char + ". This is not supported!"));          
        }
        else {
          tc.names.glaem_each(function(_,trigger_char_name) {
            vc.lookup_table[trigger_char_name] = rc;
          });
        }
      }
    });
  });
}

Glaemscribe.VirtualChar.prototype.n2c = function(trigger_char_name) {
  return this.lookup_table[trigger_char_name];
}

Glaemscribe.Charset = function(charset_name) {
  
  this.name         = charset_name;
  this.chars        = [];
  this.errors       = [];
  return this;
}

Glaemscribe.Charset.prototype.add_char = function(line, code, names)
{
  if(names == undefined || names.length == 0 || names.indexOf("?") != -1) // Ignore characters with '?'
    return;
  
  var c     = new Glaemscribe.Char();    
  c.line    = line;
  c.code    = code;
  c.names   = names;    
  c.str     = String.fromCodePoint(code);
  c.charset = this;
  this.chars.push(c);
}

Glaemscribe.Charset.prototype.add_virtual_char = function(line, classes, names)
{
  if(names == undefined || names.length == 0 || names.indexOf("?") != -1) // Ignore characters with '?'
    return;
 
  var c     = new Glaemscribe.VirtualChar();    
  c.line    = line;
  c.names   = names;
  c.classes = classes; // We'll check errors in finalize
  c.charset = this;
  this.chars.push(c);  
}

Glaemscribe.Charset.prototype.finalize = function()
{
  var charset = this;
  
  charset.errors         = [];
  charset.lookup_table   = {};
  charset.virtual_chars  = []
  
  charset.chars = charset.chars.sort(function(c1,c2) {
    if(c1.is_virtual() && c2.is_virtual())
      return c1.names[0].localeCompare(c2.names[0]);
    if(c1.is_virtual())
      return 1;
    if(c2.is_virtual())
      return -1;
    
    return (c1.code - c2.code);
  });
  
  for(var i=0;i<charset.chars.length;i++)
  {
    var c = charset.chars[i];  
    for(var j=0;j<c.names.length;j++)
    {
      var cname = c.names[j];
      var found = charset.lookup_table[cname];
      if(found != null)
        charset.errors.push(new Glaemscribe.Glaeml.Error(c.line, "Character " + cname + " found twice."));
      else
        charset.lookup_table[cname] = c;
    }
  }
  
  charset.chars.glaem_each(function(_,c) {
    if(c.is_virtual()) {
      c.finalize();
      charset.virtual_chars.push(c);
    }
  });
  
}

Glaemscribe.Charset.prototype.n2c = function(cname)
{
  return this.lookup_table[cname];
}
