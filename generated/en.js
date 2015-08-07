// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">a visual programming environment</span><span id="blocklyMessage">BlockSCAD</span><span id="codeTooltip">See generated JavaScript code.</span><span id="linkTooltip">Save and link to blocks.</span><span id="runTooltip">Run the program defined by the blocks in the workspace.</span><span id="runProgram">Run Program</span><span id="resetProgram">Reset</span><span id="dialogOk">OK</span><span id="dialogCancel">Cancel</span><span id="catLogic">Logic</span><span id="catLoops">Loops</span><span id="catMath">Math</span><span id="catText">Text</span><span id="catLists">Lists</span><span id="catColour">Colour</span><span id="catVariables">Variables</span><span id="catProcedures">Procedures</span><span id="httpRequestError">There was a problem with the request.</span><span id="linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="xmlError">Could not load your saved file.  Perhaps it was created with a different version of Blockly?</span><span id="listVariable">list</span><span id="textVariable">text</span></div>';
};


apps.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.codeDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogCode" class="dialogHiddenContent"><pre id="containerCode"></pre>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">OK</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof blockscadpage == 'undefined') { var blockscadpage = {}; }


blockscadpage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Code_badCode">Program error:\\n%1</span><span id="Code_timeout">Maximum execution iterations exceeded.</span><span id="Code_discard">Delete all %1 blocks?</span></div>';
};


blockscadpage.start = function(opt_data, opt_ignored, opt_ijData) {
  return blockscadpage.messages(null, null, opt_ijData) + '<script type="text/javascript" src="blockly/blockly_uncompressed.js"><\/script><script type="text/javascript" src="blockly/blocks/colour.js"><\/script><script type="text/javascript" src="blockly/blocks/geom_set_ops.js"><\/script><script type="text/javascript" src="blockly/blocks/lists.js"><\/script><script type="text/javascript" src="blockly/blocks/logic.js"><\/script><script type="text/javascript" src="blockly/blocks/loops.js"><\/script><script type="text/javascript" src="blockly/blocks/math.js"><\/script><script type="text/javascript" src="blockly/blocks/primitives.js"><\/script><script type="text/javascript" src="blockly/blocks/procedures.js"><\/script><script type="text/javascript" src="blockly/blocks/text.js"><\/script><script type="text/javascript" src="blockly/blocks/variables.js"><\/script><script type="text/javascript" src="blockly/openscad_compressed.js"><\/script><script type="text/javascript" src="blockly/openjscad_compressed.js"><\/script><script type="text/javascript" src="blockly/' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><table width="100%" height="100%"><tr><td><h1><span id="title"><a href="./index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">BlocksCAD</a> : AlphaTest : : <span id="project_name" style="display: inline">Project Name : <input type="text" id="blocks-filename" maxlength="20" style="font-size: 100%"></input></span><span id="file_loadMessage" class="loadMessage" style="border: 2px; display: none; color: #ffffff; background-color: #dd4b39">Loading File</span></span></h1></td><td class="farSide"><select id="languageMenu"></select></td></tr><tr><td colspan=2><table width="100%"><tr id="tabRow" height="1em"><td id="tab_blocks" class="tabon">Blocks</td><td class="tabmin">&nbsp;</td><td id="tab_openscad" class="taboff">OpenSCAD</td><td class="tabmin">&nbsp;</td><td id="tab_render" class="taboff">3D&nbsp;View</td><td class="tabmid"><button id="renderButton" class="primary" title="Render blocks into Mesh viewable in 3D&nbsp;View tab">Render</button></td><td class="tabmid"><button id="undoButton" class="gray" title="Undo last change to blocks" disabled>Undo</button></td><td class="tabmin"><button id="redoButton" class="gray" title="Redo last change to blocks" disabled>Redo</button></td><td class="tabmax"><button id="trashButton" class="notext" title="Discard all blocks."><img src=\'blockly/media/1x1.gif\' class="trash icon21"></button> <button id="saveButton" class="primary" title="Save Blocks as XML">Save Blocks</button> <div class="file-input-wrapper" style="display:inline;"><button class="btn-file-input">Load Blocks</button><input type="file" name="file" title="Load a BlocksCAD xml file" id="fileinput"/></div></td></tr></table></td></tr><tr><td height="99%" colspan=2 id="content_area">' + blockscadpage.toolbox(null, null, opt_ijData) + '</td></tr></table><div id="content_blocks" class="content"></div><pre id="content_openscad" class="content"></pre><pre id="content_openjscad" class="content"></pre><div id="content_render" class="content"><select id="viewMenu" class="vmenu"><option value = "diagonal">diagonal</option><option value = "front">front</option><option value = "top">top</option><option value = "right">right</option><option value = "left">left</option><option value = "back">back</option><option value = "bottom">bottom</option></select><button id="viewReset" class="vreset" title="Reposition Camera">Reset View</button></div><textarea id="content_xml" class="content" wrap="off">hahahahaha</textarea></div>' + apps.dialog(null, null, opt_ijData) + apps.storageDialog(null, null, opt_ijData);
};


blockscadpage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><category name="3D Primitives"><block type="sphere"><value name="RAD"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="cylinder"><value name="RAD1"><block type="math_number"><field name="NUM">10</field></block></value><value name="RAD2"><block type="math_number"><field name="NUM">10</field></block></value><value name="HEIGHT"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="cube"><value name="XVAL"><block type="math_number"><field name="NUM">10</field></block></value><value name="YVAL"><block type="math_number"><field name="NUM">10</field></block></value><value name="ZVAL"><block type="math_number"><field name="NUM">10</field></block></value></block></category><category name="2D Primitives"><block type="circle"><value name="RAD"><block type="math_number"><field name="NUM">10</field></block></value></block><block type="square"><value name="XVAL"><block type="math_number"><field name="NUM">10</field></block></value><value name="YVAL"><block type="math_number"><field name="NUM">10</field></block></value></block></category><category name="Transformations"><block type="translate"><value name="XVAL"><block type="math_number"><field name="NUM">0</field></block></value><value name="YVAL"><block type="math_number"><field name="NUM">0</field></block></value><value name="ZVAL"><block type="math_number"><field name="NUM">0</field></block></value></block><block type="simplerotate"><value name="XVAL"><block type="math_angle"><field name="NUM">0</field></block></value><value name="YVAL"><block type="math_angle"><field name="NUM">0</field></block></value><value name="ZVAL"><block type="math_angle"><field name="NUM">0</field></block></value></block><block type="simplemirror_new"></block><block type="scale"><value name="XVAL"><block type="math_number"><field name="NUM">1</field></block></value><value name="YVAL"><block type="math_number"><field name="NUM">1</field></block></value><value name="ZVAL"><block type="math_number"><field name="NUM">1</field></block></value></block><block type="color"><value name="COLOR"><block type="colour_picker"><field name="COLOUR">#ffcc00</field></block></value></block><block type="$fn"><value name="SIDES"><block type="math_number"><field name="NUM">8</field></block></value></block><block type="linearextrude"><value name="HEIGHT"><block type="math_number"><field name="NUM">10</field></block></value><value name="TWIST"><block type="math_number"><field name="NUM">0</field></block></value></block><block type="rotateextrude"><value name="FACES"><block type="math_number"><field name="NUM">5</field></block></value></block></category><category name="Set Operations"><block type="union"></block><block type="difference"></block><block type="intersection"></block><block type="hull"></block></category><category name="Math"><block type="math_number"></block><block type="math_angle"></block><block type="math_arithmetic"></block><block type="math_single"></block><block type="math_trig"></block><block type="math_constant_bs"></block><block type="math_number_property"></block><block type="math_round"></block><block type="math_modulo"></block><block type="math_constrain"><value name="LOW"><block type="math_number"><field name="NUM">1</field></block></value><value name="HIGH"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="math_random_int"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">100</field></block></value></block><block type="math_random_float"></block></category><category name="Logic"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Loops"><block type="controls_for"><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">10</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value></block></category><category name="Advanced"><block type="torus"><value name="RAD1"><block type="math_number"><field name="NUM">4</field></block></value><value name="RAD2"><block type="math_number"><field name="NUM">1</field></block></value><value name="SIDES"><block type="math_number"><field name="NUM">8</field></block></value><value name="FACES"><block type="math_number"><field name="NUM">3</field></block></value></block><block type="fancyrotate"><value name="AVAL"><block type="math_angle"><field name="NUM">0</field></block></value><value name="XVAL"><block type="math_number"><field name="NUM">0</field></block></value><value name="YVAL"><block type="math_number"><field name="NUM">0</field></block></value><value name="ZVAL"><block type="math_number"><field name="NUM">0</field></block></value></block><block type="fancymirror"><value name="XVAL"><block type="math_number"><field name="NUM">1</field></block></value><value name="YVAL"><block type="math_number"><field name="NUM">1</field></block></value><value name="ZVAL"><block type="math_number"><field name="NUM">1</field></block></value></block></category><category name="Variables" custom="VARIABLE"></category><category name="Procedures" custom="PROCEDURE"></category></xml>';
};


blockscadpage.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return blockscadpage.messages(null, null, opt_ijData) + '<script type="text/javascript" src="blockly/blockly_compressed.js"><\/script><script type="text/javascript" src="blockly/blocks_compressed.js"><\/script><script type="text/javascript" src="blockly/' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><div id="blockly"></div>';
};