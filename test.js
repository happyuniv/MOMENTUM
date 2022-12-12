export default function map_conv
(
lat, 
lon   
) {
	let lon1, lat1;
    let x,y;
    const map = {};

    map.Re = 6371.00877; // 지도반경
    map.grid = 5.0; // 격자간격 (km)
    map.slat1 = 30.0; // 표준위도 1
    map.slat2 = 60.0; // 표준위도 2
    map.olon = 126.0; // 기준점 경도
    map.olat = 38.0; // 기준점 위도
    map.xo = 210/map.grid; // 기준점 X좌표
    map.yo = 675/map.grid; // 기준점 Y좌표
    map.first = 0;
	//
	// 위경도 -> (X,Y)
	//
    lat1 = lat;
    lon1 = lon;
    let temp = lamcproj(lat1, lon1, map);
    x = parseInt(temp[0] + 1.5);
    y = parseInt(temp[1] + 1.5);

    console.log('x: ',x,'y: ',y);

	return 0;
}

function lamcproj(lat, lon, map)
{
    let x, y;
	let PI, DEGRAD, RADDEG;
	let re, olon, olat, sn, sf, ro;
	let slat1, slat2, alon, alat, xn, yn, ra, theta;

	if (map.first == 0) {
		PI = Math.asin(1.0)*2.0;
		DEGRAD = PI/180.0;
		RADDEG = 180.0/PI;

		re = map.Re/map.grid;
		slat1 = map.slat1 * DEGRAD;
		slat2 = map.slat2 * DEGRAD;
		olon = map.olon * DEGRAD;
		olat = map.olat * DEGRAD;

        
		sn = Math.tan(PI*0.25 + slat2*0.5)/Math.tan(PI*0.25 + slat1*0.5);
		sn = Math.log(Math.cos(slat1)/Math.cos(slat2))/Math.log(sn);
		sf = Math.tan(PI*0.25 + slat1*0.5);
		sf = Math.pow(sf,sn)*Math.cos(slat1)/sn;
		ro = Math.tan(PI*0.25 + olat*0.5);
		ro = re*sf/Math.pow(ro,sn);
		map.first = 1;
	}

    ra = Math.tan(PI*0.25+lat*DEGRAD*0.5);
    ra = re*sf/Math.pow(ra,sn);
    theta = lon*DEGRAD - olon;
    if (theta > PI) theta -= 2.0*PI;
    if (theta < -PI) theta += 2.0*PI;
    theta *= sn;
    x = parseFloat(ra*Math.sin(theta)) + map.xo;
    y = parseFloat(ro - ra*Math.cos(theta)) + map.yo;


	return [x,y];
}

// map_conv(34.9747, 127.4975);
