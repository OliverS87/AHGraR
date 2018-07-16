/*
 * Dies ist eine JavaScript-Umgebung.
 *
 * Geben Sie etwas JavaScript ein und führen Sie einen Rechtsklick aus oder wählen Sie aus dem Ausführen-Menü:
 * 1. Ausführen, um den ausgewählten Text zu evaluieren (Strg+R),
 * 2. Untersuchen, um den Objekt-Inspektor auf das Resultat anzuwenden (Strg+I), oder
 * 3. Anzeigen, um das Ergebnis in einem Kommentar hinter der Auswahl einzufügen. (Strg+L)
 */
colors = {
        0: "#00ffff", //aqua
        1: "#f0ffff", //azure
        2: "#f5f5dc", //beige
        3: "#0000ff", //blue
        4: "#a52a2a", //brown
        5: "#00ffff", //cyan
        6: "#ff00ff", //fuchsia
        7: "#ffd700", //gold
        8: "#008000", //green
        9: "#4b0082", //indigo
        10: "#f0e68c", //khaki
        11: "#add8e6", //lightblue
        12: "#e0ffff", //lightcyan
        13: "#90ee90", //lightgreen
        14: "#d3d3d3", //lightgrey
        15: "#ffb6c1", //lightpink
        16: "#ffffe0", //lightyellow
        17: "#00ff00", //lime
        18: "#ff00ff", //magenta
        19: "#800000", //maroon
        20: "#000080", //navy
        21: "#808000", //olive
        22: "#ffa500", //orange
        23: "#ffc0cb", //pink
        24: "#800080", //purple
        25: "#800080", //violet
        26: "#ff0000", //red
        27: "#c0c0c0", //silver
        28: "#ffffff", //white
        29: "#ffff00" //yellow
    };
color_map = {};
color_index = (Object.keys(color_map).length + 1);
color_index = 30;
color_map["abc"]="auto";
console.log(colors[color_index%30]);
if(color_map["abc"])
  {
   console.log(color_map["abc"]);    
  }
else
  {
    console.log("Tröt");    
  };

