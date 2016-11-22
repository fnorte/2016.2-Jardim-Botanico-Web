var medicinalTrail;

var medicinalTrailContentString =
  '<div id="content">'+
  '<div id="siteNotice">'+
  '</div>'+
  '<h1 id="firstHeading" class="firstHeading">Trilha Horto Medicinal</h1>'+
  '<div id="bodyContent">'+
  '<p>A <b>Trilha Horto Medicinal</b>, ............. ' +
  '  '+
  '. '+
  '<p>Leia mais em: <a href="/trails/medicinal_trail">'+
  'Trilha Horto Medicinal</a> '+
  '</div>'+
  '</div>';

var medicinalTrailCoordenates = [
    {lat: -15.873563069277198, lng: -47.83827302637292},
    {lat: -15.87364046716198, lng: -47.83823547544671},
    {lat: -15.873712705160957, lng: -47.83817646684838},
    {lat: -15.873779783279693, lng: -47.83812282266808},
    {lat: -15.873826221964162, lng: -47.83804235639764},
    {lat: -15.873857181081219, lng: -47.8379457968731},
    {lat: -15.8738623409336, lng: -47.837843872930534},
    {lat: -15.873913939450112, lng: -47.83776340666009},
    {lat: -15.873929419002502, lng: -47.83762393179131},
    {lat: -15.873970697803026, lng: -47.837548829938896},
    {lat: -15.874004471367961, lng: -47.83745913596249},
    {lat: -15.874030270609682, lng: -47.83738671631909},
    {lat: -15.874058649771744, lng: -47.837346483183865},
    {lat: -15.874071549389548, lng: -47.8372982034216},
    {lat: -15.874099928545807, lng: -47.837236512614254},
    {lat: -15.874135812920585, lng: -47.83717868509484},
    {lat: -15.874166302938345, lng: -47.83710594542072},
    {lat: -15.87414566355917, lng: -47.83702011473224},
    {lat: -15.874094065101994, lng: -47.836923555207704},
    {lat: -15.87405841524576, lng: -47.83692119303964},
    {lat: -15.874003298683581, lng: -47.836978430011925},
    {lat: -15.87401232841861, lng: -47.83701732204264},
    {lat: -15.874004588645747, lng: -47.837036097505745},
    {lat: -15.873977558072395, lng: -47.83706664763838},
    {lat: -15.873943960414769, lng: -47.83707901284998},
    {lat: -15.873909131422751, lng: -47.837109858253655},
    {lat: -15.873865155405637, lng: -47.837153364145024},
    {lat: -15.873834196289815, lng: -47.83719359728025},
    {lat: -15.873803237169234, lng: -47.83722310157941},
    {lat: -15.873803237169234, lng: -47.837279427968724},
    {lat: -15.873810976949818, lng: -47.83732502552198},
    {lat: -15.873810976949818, lng: -47.837362576448186},
    {lat: -15.873792917461314, lng: -47.83739208074735},
    {lat: -15.873792917461314, lng: -47.83742694946454},
    {lat: -15.873792917461314, lng: -47.837477911435826},
    {lat: -15.873792917461314, lng: -47.83750741573499},
    {lat: -15.873774857971181, lng: -47.83754764887021},
    {lat: -15.87372325941905, lng: -47.83758519979642},
    {lat: -15.873702619994491, lng: -47.83762811514066},
    {lat: -15.873702619994491, lng: -47.83768175932096},
    {lat: -15.873705317195713, lng: -47.83770664975691},
    {lat: -15.873701447303436, lng: -47.83772944853354},
    {lat: -15.873698867375197, lng: -47.83775358841467},
    {lat: -15.873694997482778, lng: -47.83777370498228},
    {lat: -15.873694997482778, lng: -47.83780589149046},
    {lat: -15.8736795179124, lng: -47.83783807799864},
    {lat: -15.873673068091046, lng: -47.83787026450682},
    {lat: -15.873658761210299, lng: -47.83789901815908},
    {lat: -15.873658761210299, lng: -47.83792315804021},
    {lat: -15.873644747511213, lng: -47.83796049377088},
    {lat: -15.873640877617765, lng: -47.837973904815954},
    {lat: -15.873639587653257, lng: -47.837999385801595},
    {lat: -15.873634427795174, lng: -47.83801682016019},
    {lat: -15.873631202883804, lng: -47.838044312802595},
    {lat: -15.873615723308513, lng: -47.83808454593782},
    {lat: -15.873612498396849, lng: -47.83811203858022},
    {lat: -15.873607983520435, lng: -47.838138190118116},
    {lat: -15.873600888714423, lng: -47.83816031834249},
    {lat: -15.873590568996145, lng: -47.83818445822362},
    {lat: -15.873586054119222, lng: -47.83820189258222},
    {lat: -15.87357573440017, lng: -47.83822737356786},
    {lat: -15.873567349628072, lng: -47.83825754841928},
];


var medicinalTrailColor = '#ff8c1a';

function addmedicinalTrail(){
    //create the river
    medicinalTrail = createTrail(medicinalTrailCoordenates, medicinalTrailColor);

    //set the river on map
    medicinalTrail.setMap(map);

    //add a listener to open a infowindow every time the river is clicked
    google.maps.event.addListener(medicinalTrail, 'click', function(clicked_location) {
        addInfowindow(clicked_location.latLng, medicinalTrailContentString);
    });
}