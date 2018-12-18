var clear = 'Choose a country above to find out more about their national parks! Choose Clear to return to this message.';

//North America buttons
function NAClear() {
	document.getElementById('nacontent').innerHTML = clear;
	if (document.getElementById('cabutton').classList.contains('buttonactive')) {
		document.getElementById('cabutton').classList.remove('buttonactive');
	}
	if (document.getElementById('combutton').classList.contains('buttonactive')) {
		document.getElementById('combutton').classList.remove('buttonactive');
	}
}
function UnitedStates() {
	document.getElementById('nacontent').innerHTML = 'The United States established the first national park, Yellowstone. Grand Teton National Park sits right next to it. Many more are spread throughout the country today, and all have their own unique traits.';
	document.getElementById('combutton').classList.add('buttonactive');
	if (document.getElementById('cabutton').classList.contains('buttonactive')) {
		document.getElementById('cabutton').classList.remove('buttonactive');
	}
}
function Canada() {
	document.getElementById('nacontent').innerHTML = 'Banff National Park is one of the most popular Canadian parks, while Tuktut Nogait is one of the least popular. Tuktut Nogait is on the outer reaches of northern Canada.';
	document.getElementById('cabutton').classList.add('buttonactive');
	if (document.getElementById('combutton').classList.contains('buttonactive')) {
		document.getElementById('combutton').classList.remove('buttonactive');
	}
}
//South America buttons
function SAClear() {
	document.getElementById('sacontent').innerHTML = clear;
	if (document.getElementById('arbutton').classList.contains('buttonactive')) {
		document.getElementById('arbutton').classList.remove('buttonactive');
	}
	if (document.getElementById('clbutton').classList.contains('buttonactive')) {
		document.getElementById('clbutton').classList.remove('buttonactive');
	}
}
function Argentina() {
	document.getElementById('sacontent').innerHTML = 'Argentina is home to many mountainous parks. The diverse landscapes may surprise you, as it can include mountains and waterfalls.';
	document.getElementById('arbutton').classList.add('buttonactive');
	if (document.getElementById('brbutton').classList.contains('buttonactive')) {
		document.getElementById('brbutton').classList.remove('buttonactive');
	}
	if (document.getElementById('clbutton').classList.contains('buttonactive')) {
		document.getElementById('clbutton').classList.remove('buttonactive');
	}
}
function Brazil() {
	document.getElementById('sacontent').innerHTML = 'Brazil is home to many types of terrains. You probably knkow it for the Amazon rainforest. Brazil is big on conservation, and has many parks ranging in area.';
	document.getElementById('brbutton').classList.add('buttonactive');
	if (document.getElementById('arbutton').classList.contains('buttonactive')) {
		document.getElementById('arbutton').classList.remove('buttonactive');
	}
	if (document.getElementById('clbutton').classList.contains('buttonactive')) {
		document.getElementById('clbutton').classList.remove('buttonactive');
	}
}
function Chile() {
   document.getElementById('sacontent').innerHTML = 'Chile is home to the Torres del Paine National Park, a park with dramatic peaks at the very tip of the country. The Cuernos del Paine are picturesque, and frequently top the list for recommended South American mountain ranges.';
   document.getElementById('clbutton').classList.add('buttonactive');
   if (document.getElementById('arbutton').classList.contains('buttonactive')) {
		document.getElementById('arbutton').classList.remove('buttonactive');
	}
	if (document.getElementById('brbutton').classList.contains('buttonactive')) {
		document.getElementById('brbutton').classList.remove('buttonactive');
	}
}

//Europe buttons
function EUClear() {
	document.getElementById('eucontent').innerHTML = clear;
	if (document.getElementById('isbutton').classList.contains('buttonactive')) {
		document.getElementById('isbutton').classList.remove('buttonactive');
	}
	if (document.getElementById('itbutton').classList.contains('buttonactive')) {
		document.getElementById('itbutton').classList.remove('buttonactive');
	}
	if (document.getElementById('ukbutton').classList.contains('buttonactive')) {
		document.getElementById('ukbutton').classList.remove('buttonactive');
	}
}
function Iceland() {
	document.getElementById('eucontent').innerHTML = 'Iceland may sound like a barren wasteland, but it actually hosts stunning landscapes that combine rock and ice. Iceland is also famous for some of their waterfalls.';
	document.getElementById('isbutton').classList.add('buttonactive');
	if (document.getElementById('itbutton').classList.contains('buttonactive')) {
		document.getElementById('itbutton').classList.remove('buttonactive');
	}
	if (document.getElementById('ukbutton').classList.contains('buttonactive')) {
		document.getElementById('ukbutton').classList.remove('buttonactive');
	}
}
function Italy() {
	document.getElementById('eucontent').innerHTML = 'Italy is a mountainous country. The range on its northern border has historically protected the country, but it now attracts tourists, especially due to the Dolomites.';
	document.getElementById('itbutton').classList.add('buttonactive');
	if (document.getElementById('isbutton').classList.contains('buttonactive')) {
		document.getElementById('isbutton').classList.remove('buttonactive');
	}
	if (document.getElementById('ukbutton').classList.contains('buttonactive')) {
		document.getElementById('ukbutton').classList.remove('buttonactive');
	}
}
function UnitedKingdom() {
	document.getElementById('eucontent').innerHTML = 'The UK also has scenic areas, though they may not be as dramatic as some other parks. The UK is filled with rolling hills and occasional cliffs.';
	document.getElementById('ukbutton').classList.add('buttonactive');
	if (document.getElementById('itbutton').classList.contains('buttonactive')) {
		document.getElementById('itbutton').classList.remove('buttonactive');
	}
	if (document.getElementById('isbutton').classList.contains('buttonactive')) {
		document.getElementById('isbutton').classList.remove('buttonactive');
	}
}

//Africa buttons
function AFClear() {
	document.getElementById('afcontent').innerHTML = clear;
	if (document.getElementById('kebutton').classList.contains('buttonactive')) {
		document.getElementById('kebutton').classList.remove('buttonactive');
	}
	if (document.getElementById('tzbutton').classList.contains('buttonactive')) {
		document.getElementById('tzbutton').classList.remove('buttonactive');
	}
	if (document.getElementById('zwbutton').classList.contains('buttonactive')) {
		document.getElementById('zwbutton').classList.remove('buttonactive');
	}
}
function Kenya() {
	document.getElementById('afcontent').innerHTML = 'Kenya is a habitat to many animals that would be hard to find in the wild elsewhere. Some of its parks allow a view of Mt. Kilimanjaro in neighboring Tanzania.';
	document.getElementById('kebutton').classList.add('buttonactive');
	if (document.getElementById('tzbutton').classList.contains('buttonactive')) {
		document.getElementById('tzbutton').classList.remove('buttonactive');
	}
	if (document.getElementById('zwbutton').classList.contains('buttonactive')) {
		document.getElementById('zwbutton').classList.remove('buttonactive');
	}
}
function Tanzania() {
	document.getElementById('afcontent').innerHTML = 'Tanzania is definitely well known for the Serengeti plains and Mt. Kilimanjaro. The wildebeest migration is also apparently one of the most fascinating events in the Serengeti.';
	document.getElementById('tzbutton').classList.add('buttonactive');
	if (document.getElementById('kebutton').classList.contains('buttonactive')) {
		document.getElementById('kebutton').classList.remove('buttonactive');
	}
	if (document.getElementById('zwbutton').classList.contains('buttonactive')) {
		document.getElementById('zwbutton').classList.remove('buttonactive');
	}
}
function Zimbabwe() {
	document.getElementById('afcontent').innerHTML = 'Of course, Zimbabwe also has many animals to discover, but it is also home to the Chinhoyi Caves National Park, a park with an underwater cave system.';
	document.getElementById('zwbutton').classList.add('buttonactive');
	if (document.getElementById('tzbutton').classList.contains('buttonactive')) {
		document.getElementById('tzbutton').classList.remove('buttonactive');
	}
	if (document.getElementById('tzbutton').classList.contains('buttonactive')) {
		document.getElementById('tzbutton').classList.remove('buttonactive');
	}
}

//Asia buttons
function ASClear() {
	document.getElementById('ascontent').innerHTML = clear;
	if (document.getElementById('jpbutton').classList.contains('buttonactive')) {
		document.getElementById('jpbutton').classList.remove('buttonactive');
	}
	if (document.getElementById('rubutton').classList.contains('buttonactive')) {
		document.getElementById('rubutton').classList.remove('buttonactive');
	}
	if (document.getElementById('thbutton').classList.contains('buttonactive')) {
		document.getElementById('thbutton').classList.remove('buttonactive');
	}
}
function Japan() {
	document.getElementById('ascontent').innerHTML = 'Japan is filled with beautiful flora and fauna, and is well-known for Mt. Fuji.';
	document.getElementById('jpbutton').classList.add('buttonactive');
	if (document.getElementById('rubutton').classList.contains('buttonactive')) {
		document.getElementById('rubutton').classList.remove('buttonactive');
	}
	if (document.getElementById('thbutton').classList.contains('buttonactive')) {
		document.getElementById('thbutton').classList.remove('buttonactive');
	}
}
function Russia() {
	document.getElementById('ascontent').innerHTML = 'The expanse of Russia is enormous, and it protects so much artic wildlife. Russia takes conservation seriously, and its zapovedniks are some of the most restrictive protected areas.';
	document.getElementById('rubutton').classList.add('buttonactive');
	if (document.getElementById('jpbutton').classList.contains('buttonactive')) {
		document.getElementById('jpbutton').classList.remove('buttonactive');
	}
	if (document.getElementById('thbutton').classList.contains('buttonactive')) {
		document.getElementById('thbutton').classList.remove('buttonactive');
	}
}
function Thailand() {
	document.getElementById('ascontent').innerHTML = 'Thailand is filled with lush rainforests and interesting animals and rock formations. Many parks also include islands or are next to large bodies of water.';
	document.getElementById('thbutton').classList.add('buttonactive');
	if (document.getElementById('rubutton').classList.contains('buttonactive')) {
		document.getElementById('rubutton').classList.remove('buttonactive');
	}
	if (document.getElementById('jpbutton').classList.contains('buttonactive')) {
		document.getElementById('jpbutton').classList.remove('buttonactive');
	}
}
//Oceania buttons
function AUClear() {
	document.getElementById('aucontent').innerHTML = clear;
	if (document.getElementById('aubutton').classList.contains('buttonactive')) {
		document.getElementById('aubutton').classList.remove('buttonactive');
	}
	if (document.getElementById('nzbutton').classList.contains('buttonactive')) {
		document.getElementById('nzbutton').classList.remove('buttonactive');
	}
	if (document.getElementById('pgbutton').classList.contains('buttonactive')) {
		document.getElementById('pgbutton').classList.remove('buttonactive');
	}
}
function Australia() {
	document.getElementById('aucontent').innerHTML = 'Australia is definitely known for its dangerous wildlife, but Uluru, or Ayers Rock, could make up for that with its massive size.';
	document.getElementById('aubutton').classList.add('buttonactive');
	if (document.getElementById('nzbutton').classList.contains('buttonactive')) {
		document.getElementById('nzbutton').classList.remove('buttonactive');
	}
	if (document.getElementById('pgbutton').classList.contains('buttonactive')) {
		document.getElementById('pgbutton').classList.remove('buttonactive');
	}
}
function NewZealand() {
	document.getElementById('aucontent').innerHTML = 'New Zealand is filled with many different types of landscapes, from mountains to beaches to volcanoes.';
	document.getElementById('nzbutton').classList.add('buttonactive');
	if (document.getElementById('aubutton').classList.contains('buttonactive')) {
		document.getElementById('aubutton').classList.remove('buttonactive');
	}
	if (document.getElementById('pgbutton').classList.contains('buttonactive')) {
		document.getElementById('pgbutton').classList.remove('buttonactive');
	}
}