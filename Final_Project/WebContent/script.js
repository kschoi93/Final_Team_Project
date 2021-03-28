  $(function(){
		//--------------------------------------------------#searchTxt placeholder 설정
		$('#searchTxt').click(function(){
			$('#searchTxt').attr('placeholder','');
		});
		$('#searchTxt').focusout(function(){
			$('#searchTxt').attr('placeholder','제목/작가로 검색할 수 있습니다.');
		});
		
		//---------------------------------------------------#service_icon 설정
		$('#service_icon').hover(function(){
			$('#service_icon').css('opacity','1.0');
		});
		$('#service_icon').mouseleave(function(){
			$('#service_icon').css('opacity','0.5');
		});
		
		// ---------------------------------------------------titleStr 설정
		var titleStr = new Array('홈','웹툰','베스트 도전','도전만화','마이페이지','|','단행본 만화','장르소설');
		for(var i=0; i<titleStr.length; i++){
			
			if(i!=5){
				$('#titleMenu').append('<li><a href="#" onclick="return false;">'+titleStr[i]+'</a></li>');
			} else {
				$('#titleMenu').append('<li>'+titleStr[i]+'</li>');	
			}
		}
		
		$('#titleMenu').append('<div><a href="#" onclick="return false">&lt;스위트홈&gt;프리퀄&lt;엽총소년&gt;</a></div>');
		
		// ------------------------------------------------------menu 설정
		var genre = new Array('요일별','장르별','작품별','작가별','연도별','테마웹툰','완결웹툰');
		for(var i=0; i<genre.length;i++){
			$('#genre').append('<li><a href="#" onclick="return false;">'+genre[i]+'</a></li>');	
		};
		// menu의 장르 글씨 색상 변환 기능
		$('#genre a').click(function(){
			$('#genre a').css('color','rgb(133, 133, 133)');
			console.log($(this).css('color'));
			if($(this).css('color')=='rgb(133, 133, 133)'){
				$(this).css('color','black');
			}
			
		});
		
		// ----------------------------------------------------랭크 배너 설정
		// 인기순
		var rankStr = ['급식아빠-8화 저 새끼야? 우리 애들을 밟았다는 게?','전지적 독자 시점-042 Ep.09 전지적 개복치 (6)'
				,'고수-2부 138화','복학왕-334화 청첩장 4화','납주의 첫날밤을 가져버렸다-36화'
				,'여주실격!-65화 인연(1)','튜토리얼 탑의 고인물-46화','원수를 사랑하라-72화','나쁜사람-32화'
				,'연놈-265화. 원상고 바람의 복학생 (독대)'];
		for(var i=1; i < rankStr.length+1;i++){
			$('#rank>ul').eq(0).append('<li><span>'+i+'</span><span id="wordCut"><a href="#" onclick="return false;">'
					+rankStr[i-1] +'</a></span><span>-</span><span>0</span></li>');
		}
		var now = new Date();
		var hTime = now.getHours();
		
		// 업데이트순
		var updateStr = ['희망강림-희망감림 4화','오늘의 순정망화-시즌2 122화','신비-45화','연애혁명-342 Unlock',
				'독립일기-72화 집안일의 굴레','전자오락수호대 STAGE 257 - 끝의 끝에서','안개무덤-64화 김이레 (3)'
				,'하드캐리-138, 악마','이두나!-82화, 첫 크리스마스였는데...','쿠베라-3부 189화 이면(7)'];
		for(var i=1; i < updateStr.length+1;i++){
			$('#rank>ul').eq(1).append('<li><span>'+i+'</span><span id="wordCut2"><a href="#" onclick="return false;">'
					+updateStr[i-1] +'</a></span><span>'+hTime+'시간전</span></li>');
		}
		
		
		// 인기순 업데이트순 아래 화살표
		$("#rank>ul").eq(1).css("display","none");
		$('#rank>a:nth-of-type(2)>div>div').css('display','none');
		// 인기순 업데이트순 클릭시 변환 기능 -> bottom 선
		$("#rank>a:nth-of-type(1)>div").click(function(){
			$(this).css('border-bottom','1px solid white');
			$("#rank>a:nth-of-type(2)>div").css('border-bottom','1px solid #e1e1e1');
			// bottom 선 표시
			$("#rank>ul").eq(0).css("display","block");
			$("#rank>ul").eq(1).css("display","none");
			// 화살표 표시
			$('#rank>a:nth-of-type(1)>div>div').css('display','block');
			$('#rank>a:nth-of-type(2)>div>div').css('display','none');
		});
		
		$("#rank>a:nth-of-type(2)>div").click(function(){
			$(this).css('border-bottom','1px solid white');
			$("#rank>a:nth-of-type(1)>div").css('border-bottom','1px solid #e1e1e1');
			// bottom 선 표시
			$("#rank>ul").eq(1).css("display","block");
			$("#rank>ul").eq(0).css("display","none");
			// 화살표 표시
			$('#rank>a:nth-of-type(2)>div>div').css('display','block');
			$('#rank>a:nth-of-type(1)>div>div').css('display','none');
		});
		
		// ------------------------------------------------------실시간 인기만화 배너
		var imgArray = ['img/box.jpg','img/iduna.jpg','img/gigi.jpg','img/white.jpg','img/jungle.jpg'];
		var imgArrayName = ['더 복서','이두나!','기기괴괴','화이트 블러드','정글쥬스'];
		var imgArrayWriter = ['정지훈','민송아','오성대','임리나','형은/쥬더'];
		for(var i=0; i < imgArray.length;i++){
			$("#popularity>ul").eq(0).append('<li><span>'+(i+1)+'</span>'
			+ '<span><a href="#" onclick="return false;"><img src="'+imgArray[i]+'"/></a></span>'
			+ '<div id="imgArrayStr"><span class="ageRankTitle"><a href="#" onclick="return false;">'+imgArrayName[i]+'</a></span><br/>'
			+ '<span class="ageRankName"><a href="#" onclick="return false;">'+imgArrayWriter[i]+'</a></span></div>'
			+ '</span><span>-</span><span>0</span></li>');
		}
		var imgArray2 = ['img/face.jpg','img/dog.jpg','img/walk.jpg','img/love.jpg','img/merry.jpg'];
		var imgArrayName2 = ['외모지상주의','개를 낳았다','걸어서 30분','연애혁명','재혼 황후'];
		var imgArrayWriter2 = ['박태준','이선','이온도','232','알파타르트/숨풀'];
		for(var i=0; i < imgArray.length;i++){
			$("#popularity>ul").eq(1).append('<li><span>'+(i+1)+'</span>'
			+ '<span><a href="#" onclick="return false;"><img src="'+imgArray2[i]+'"/></a></span>'
			+ '<div id="imgArrayStr"><span class="ageRankTitle"><a href="#" onclick="return false;">'+imgArrayName2[i]+'</a></span><br/>'
			+ '<span class="ageRankName"><a href="#" onclick="return false;">'+imgArrayWriter2[i]+'</a></span></div>'
			+ '</span><span>-</span><span>0</span></li>');
		}
		// 남자 여자 글자 아래 화살표
		$("#popularity>ul").eq(1).css("display","none");
		$('#popularity>a:nth-of-type(2)>div>div').css('display','none');
		// 인기순 업데이트순 클릭시 변환 기능 -> bottom 선
		$("#popularity>a:nth-of-type(1)>div").click(function(){
			$(this).css('border-bottom','1px solid white');
			$("#popularity>a:nth-of-type(2)>div").css('border-bottom','1px solid #e1e1e1');
			// bottom 선 표시
			$("#popularity>ul").eq(0).css("display","block");
			$("#popularity>ul").eq(1).css("display","none");
			// 화살표 표시
			$('#popularity>a:nth-of-type(1)>div>div').css('display','block');
			$('#popularity>a:nth-of-type(2)>div>div').css('display','none');
		});
		
		$("#popularity>a:nth-of-type(2)>div").click(function(){
			$(this).css('border-bottom','1px solid white');
			$("#popularity>a:nth-of-type(1)>div").css('border-bottom','1px solid #e1e1e1');
			// bottom 선 표시
			$("#popularity>ul").eq(1).css("display","block");
			$("#popularity>ul").eq(0).css("display","none");
			// 화살표 표시
			$('#popularity>a:nth-of-type(2)>div>div').css('display','block');
			$('#popularity>a:nth-of-type(1)>div>div').css('display','none');
		});
		
		// 실시간 인기만화 화살표 (나이대 변경)
		$("#popularity input").eq(1).click(function(){
			var valCheck = $('#popularity>div:first-child>span').html();
			if(valCheck == '20대 실시간 인기만화'){
				$('#popularity>div:first-child>span').html('10대 실시간 인기만화');
			} else if(valCheck == "30대 실시간 인기만화"){
				$('#popularity>div:first-child>span').html('20대 실시간 인기만화');
			}
		});
		$("#popularity input").eq(0).click(function(){
			var valCheck = $('#popularity>div:first-child>span').html();
			if(valCheck == '20대 실시간 인기만화'){
				$('#popularity>div:first-child>span').html('30대 실시간 인기만화');
			} else if(valCheck == "10대 실시간 인기만화"){
				$('#popularity>div:first-child>span').html('20대 실시간 인기만화');
			}
		});
		
		// sectionLeft  요일 버튼 
		$("#webtoonMenu>span").click(function(){
			$('#webtoonMenu>span>a').css('color','black');
			$('#webtoonMenu>span').css('border-bottom','0').css('font-weight','inherit');
			$(this).css('border-bottom','3px solid rgb(0,213,100)').css('font-weight','bold');
			
			var dayIdCheck = $(this).attr('id');
			switch(dayIdCheck){
				case "allday" : $('#webtoonMenu>span:nth-of-type(1)>a').css('color','rgb(0,213,100)');
					break;
				case "monday" : $('#webtoonMenu>span:nth-of-type(2)>a').css('color','rgb(0,213,100)');
					break;
				case "tuesday" : $('#webtoonMenu>span:nth-of-type(3)>a').css('color','rgb(0,213,100)');
					break;
				case "wednesday" : $('#webtoonMenu>span:nth-of-type(4)>a').css('color','rgb(0,213,100)');
					break;
				case "thursday" : $('#webtoonMenu>span:nth-of-type(5)>a').css('color','rgb(0,213,100)');
					break;
				case "friday" : $('#webtoonMenu>span:nth-of-type(6)>a').css('color','rgb(0,213,100)');
					break;
				case "saturday" : $('#webtoonMenu>span:nth-of-type(7)>a').css('color','rgb(0,213,100)');
					break;
				case "sunday" : $('#webtoonMenu>span:nth-of-type(8)>a').css('color','rgb(0,213,100)');
					break;
			}
			console.log($(this).attr('id'));
		});


	});