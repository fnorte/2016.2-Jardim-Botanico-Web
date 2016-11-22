var centerGroundMurundunsAreaRight;

var centerGroundMurundunsAreaRightCoordinates = [
    {lat: -15.896224941479474, lng: -47.847163528203964},
    {lat: -15.895936021634606, lng: -47.84604772925377},
    {lat: -15.895337543493236, lng: -47.845425456762314},
    {lat: -15.894512053480577, lng: -47.84548982977867},
    {lat: -15.893954845807492, lng: -47.845189422369},
    {lat: -15.893141961957346, lng: -47.84557096660137},
    {lat: -15.893100687086777, lng: -47.84454099833965},
    {lat: -15.892584750490341, lng: -47.84469120204449},
    {lat: -15.892017218706469, lng: -47.84469120204449},
    {lat: -15.891156745467013, lng: -47.844785414636135},
    {lat: -15.89063220379965, lng: -47.84420236945152},
    {lat: -15.890054347634958, lng: -47.8437303006649},

    {lat: -15.889829626674704, lng: -47.8438461199039},
    {lat: -15.889458146420866, lng: -47.84413579847751},
    {lat: -15.889158897940005, lng: -47.844404019379},
    {lat: -15.88876677856752, lng: -47.84467224028049},
    {lat: -15.888787416448272, lng: -47.84468296911655},
    {lat: -15.888611994394411, lng: -47.84492973234592},
    {lat: -15.88868422702334, lng: -47.84561637785373},
    {lat: -15.888808054326914, lng: -47.846238650345185},
    {lat: -15.888911243688348, lng: -47.846775092148164},
    {lat: -15.888983476209901, lng: -47.847236432098725},
    {lat: -15.889231130372657, lng: -47.84766558554111},
    {lat: -15.889416870794788, lng: -47.847965992950776},

    {lat: -15.889571654348936, lng: -47.848167345582624},
    {lat: -15.889695481106573, lng: -47.847877667009016},
    {lat: -15.889705799999609, lng: -47.84781329399266},
    {lat: -15.889984409911456, lng: -47.8471910215012},
    {lat: -15.890407483484575, lng: -47.847405598222394},
    {lat: -15.890582903973577, lng: -47.846676037370344},
    {lat: -15.89129490321222, lng: -47.846118137895246},
    {lat: -15.891604467312918, lng: -47.84648291832127},
    {lat: -15.891915177503494, lng: -47.84680780056078},
    {lat: -15.892529144025266, lng: -47.846539579331875},
    {lat: -15.89305024012496, lng: -47.84694191068411},
    {lat: -15.893451523531652, lng: -47.8468155119117},
    {lat: -15.894173831284979, lng: -47.84748069974739},
    {lat: -15.895515253090581, lng: -47.84735195371468},
    {lat: -15.896196279199867, lng: -47.847169563501666}
];

var centerGroundMurundunsAreaRightColor = '#42CCD0';

function addCenterGroundMurundunsAreaRight(){
    centerGroundMurundunsAreaRight = createVegetation(centerGroundMurundunsAreaRightCoordinates,
                                                      centerGroundMurundunsAreaRightColor);

    centerGroundMurundunsAreaRight.setMap(map);
}