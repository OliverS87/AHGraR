# AHGraR - Assembly Homology Graph Representation
![alt text](https://github.com/OliverS87/AHGraR/blob/master/Figures/Vis%20and%20Legend.png "AHGraR Web screenshot")
For a given species (e.g. Escherichia coli or Brassica napus) multiple genome assemblies may be present in your 
favourite database. This may be, for example, because of the presence of multiple subspecies 
(NCBI alone has 11393 different E.coli subspecies in its genome database). Different assembly approaches can also lead to 
multiple entries into a genome database (usually with differing qualities). Multiple tools exist to perform and visualize a
comparison between two genome assemblies. For larger numbers, a visual comparison becomes
increasingly complex. AHGraR uses graphs to visualize assembly comparisons. It is focused on
gene or protein homology and conservation of gene order (synteny). The latter allows the quick 
distinction between orthologs and paralogs. The software supports (and requires) genome sequences in FASTA format and GFF3 formatted
annotation files.

Most modules of AHGraR are written in Python 3.5. The webinterface
extends KnetMaps.js and is based on JavaScript. Additional third-party tools include MCL, BLAST+ and
Neo4j.

Please see the project wiki for a complete tutorial.