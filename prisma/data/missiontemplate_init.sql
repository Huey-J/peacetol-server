INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (1, 1, '가장 가까운 <span>버스 정류장</span>으로 가서 ${number}번째 오는 버스를 타세요.', '시작이 반이니까요.', '/bus_station.png', 1, 5, true);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (2, 1, '가장 가까운 <span>지하철 역</span>으로 가서 아무 지하철을 타세요.', '시작이 반이니까요.', '/subway_station.png', null, null, true);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (3, 1, '먼저, 힘차게 한 번 걸어볼까요?', '시작이 반이니까요.', '/walk.png', null, null, false);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (4, 1, '먼저, 가까운 자전거 대여소에서 <span>자전거</span>를 대여해보세요.', '시작이 반이니까요.', '/bike.png', null, null, false);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (5, 2, '음악 앱에 <span>‘봄’</span>을 검색해 ${number}번째에 나오는 플레이리스트를 틀어볼까요?', '봄 분위기를 즐겨봅시다!', '/spring.png', 1, 15, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (6, 2, '음악 앱에 <span>‘걸그룹’</span>을 검색해 ${number}번째에 나오는 플레이리스트를 틀어볼까요?', '즐거운 감상되세요!', '/girl_group.png', 1, 15, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (7, 2, '음악 앱에 <span>‘힐링’</span>을 검색해 ${number}번째에 나오는 플레이리스트를 틀어볼까요?', '힐링 타임이 되시길', '/healing.png', 1, 15, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (8, 2, '음악 앱에 <span>‘여름’</span>을 검색해 ${number}번째에 나오는 플레이리스트를 틀어볼까요?', '여름 분위기를 즐겨봅시다!', '/summer.png', 1, 15, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (9, 2, '음악 앱에 <span>‘힙합’</span>을 검색해 ${number}번째에 나오는 플레이리스트를 틀어볼까요?', '즐거운 감상되세요!', '/hiphop.png', 1, 15, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (10, 2, '음악 앱에 <span>‘2000년대’</span>를 검색해 ${number}번째에 나오는 플레이리스트를 틀어볼까요?', '즐거운 감상되세요!', '/y2k.png', 1, 15, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (11, 2, '<span>유튜브</span> 앱에 들어가서 ${number}번째로 보이는 영상을 볼까요?', '관심 있는 분야인가요?', '/youtube.png', 1, 15, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (12, 2, '<span>앨범</span>에 들어가서 <span>${number}</span>월에 찍은 사진을 봐볼까요?', '어떤 사진들이 있나요?', '/album.png', 1, 12, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (13, 3, '그리고 마음 편히 <span>정거장 ${number}개<span>를 지나쳐보죠!', '전혀 모르는 곳? 오히려 좋아', '/bus.png', 1, 10, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (14, 3, '<span>${number}분</span> 정도 여유를 가지고 걸어볼까요?', '전혀 모르는 곳? 오히려 좋아', '/walk.png', 5, 15, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (15, 3, '<span>${number}분</span> 빠르게 한 번 가볼까요?', '전혀 모르는 곳? 오히려 좋아', '/walk.png', 5, 10, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (16, 4, '내리셨나요? 내린 방향으로 걸어보세요.', '어딘지 몰라도요!', '/walk.png', null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (17, 4, '멈추셨나요? 숨을 고르고 주위를 둘러보세요', '뭔가 새로운 걸 찾아봐요', '/rest.png', null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (18, 5, '카페에 가서 <span>${number}번째</span>에 있는 메뉴를 주문해보세요!', '잘 안 먹는 거라도 도전해 보는 거예요', '/cafe.png', 1, 13, 'Thirsty');
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (19, 5, '직원에게 가장 맛있는 음료를 추천받아 주문해 보세요', '잘 안 먹는 거라도 도전해 보는 거예요', '/drink.png', null, null, 'Thirsty');
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (20, 5, '앞사람이 주문한 음료와 똑같은 음료를 주문해 보세요', '잘 안 먹는 거라도 도전해 보는 거예요', '/drink.png', null, null, 'Thirsty');
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (21, 5, '<span>${number}번째</span>로 보이는 음식점에 들어가 보세요.', '평소 안 가던 곳이라도 말이죠.', '/restaruant.png', 1, 3, 'Hungry');
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (22, 5, '메뉴판의 <span>${number}번째</span> 메뉴를 드세요.', '잘 안 먹는 거라도 도전해 보는 거예요', '/food.png', 1, 5, 'Hungry');
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (23, 5, '<span>${number>번째</span>로 비싼 메뉴를 주문해서 먹어보세요.', '잘 안 먹는 거라도 도전해 보는 거예요', '/food.png', 1, 5, 'Hungry');
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (24, 5, '<span>${number>번째</span>로 싼 메뉴를 주문해서 먹어보세요.', '잘 안 먹는 거라도 도전해 보는 거예요', '/food.png', 1, 5, 'Hungry');
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (25, 5, '옆 테이블에서 뭘 먹는지 물어봐서 똑같이 시켜먹어요.', '낯 가리지 말고요!', '/food.png', null, null, 'Hungry');
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (26, 5, '사장님께 가장 맛있는 메뉴를 물어봐서 주문하세요.', '사장님이 제일 잘 아시죠', '/food.png', null, null, 'Hungry');
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (27, 5, '외국인 컨셉으로 영어로 한 번 주문해볼까요?', '재밌잖아요!', '/talk.png', null, null, 'Hungry');
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (29, 5, '물가에 발을 한 번 담가 보세요.', '어때요, 새롭죠?', '/water.png', null, null, 'WaterSide');
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (30, 5, '물수제비를 한 번 해볼까요?', '이왕이면 예쁜 돌로 골라봐요', '/rock.png', null, null, 'WaterSide');
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (31, 5, '물 속에 무엇이 있는지 한 번 구경해보세요!', '더럽다면 유감이에요', '/fish.png', null, null, 'WaterSide');
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (33, 5, '가장 빨리 볼 수 있는 영화를 예매해서 감상해보세요.', '새로운 장르도 시도해 봐요!', '/movie.png', null, null, 'Theater');
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (34, 5, '매점에 가서 음식을 사보세요.', '오늘만큼은 flex', '/movie.png', null, null, 'Theater');
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (35, 5, '혼자 온 사람과 함께 영화를 보자고 제안해보세요.', '쉘위...?', '/movie.png', null, null, 'Theater');
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (37, 5, '코인노래방에 가서 인기차트 <span>${number}위</span>에 해당하는 노래를 불러 보세요!', '몰라도 재밌잖아요!', '/popular.png', 1, 100, 'Karaoke');
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (38, 5, '코인노래방에 가서 <span>‘아이유’</span>의 노래를 불러보세요!', '스트레스 확 풀고 오세요', '/mike.png', null, null, 'Karaoke');
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (39, 5, '코인노래방에 가서 <span>‘방탄소년단’</span>의 노래를 불러보세요!', '스트레스 확 풀고 오세요', '/mike.png', null, null, 'Karaoke');
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (40, 5, '코인노래방에 가서 <span>‘장윤정’</span>의 노래를 불러보세요!', '스트레스 확 풀고 오세요', '/mike.png', null, null, 'Karaoke');
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (41, 5, '코인노래방에 가서 <span>‘허각’</span>의 노래를 불러보세요!', '스트레스 확 풀고 오세요', '/mike.png', null, null, 'Karaoke');
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (42, 5, '코인노래방에 가서 <span>최애곡</span>을 부르세요!', '스트레스 확 풀고 오세요', '/mike.png', null, null, 'Karaoke');
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (43, 6, '다시 한 번 걸어볼까요?', '또 무슨 재밌는 일이 찾아올까요!', '/route.png', null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (44, 7, '음악 앱에 <span>‘봄’</span>을 검색해 ${number}번째에 나오는 플레이리스트를 틀어볼까요?', '봄 분위기를 즐겨봅시다!', '/spring.png', 1, 15, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (45, 7, '음악 앱에 <span>‘걸그룹’</span>을 검색해 ${number}번째에 나오는 플레이리스트를 틀어볼까요?', '즐거운 감상되세요!', '/girl_group.png', 1, 15, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (46, 7, '음악 앱에 <span>‘힐링’</span>을 검색해 ${number}번째에 나오는 플레이리스트를 틀어볼까요?', '힐링 타임이 되시길', '/healing.png', 1, 15, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (47, 7, '음악 앱에 <span>‘여름’</span>을 검색해 ${number}번째에 나오는 플레이리스트를 틀어볼까요?', '여름 분위기를 즐겨봅시다!', '/summer.png', 1, 15, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (48, 7, '음악 앱에 <span>‘힙합’</span>을 검색해 ${number}번째에 나오는 플레이리스트를 틀어볼까요?', '즐거운 감상되세요!', '/hiphop.png', 1, 15, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (49, 7, '음악 앱에 <span>‘2000년대’</span>를 검색해 ${number}번째에 나오는 플레이리스트를 틀어볼까요?', '즐거운 감상되세요!', '/y2k.png', 1, 15, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (50, 8, '카페에 가서 <span>${number}번째</span>에 있는 메뉴를 주문해보세요!', '잘 안 먹는 거라도 도전해 보는 거예요', '/cafe.png', 1, 13, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (51, 8, '직원에게 가장 맛있는 음료를 추천받아 주문해 보세요', '잘 안 먹는 거라도 도전해 보는 거예요', '/drink.png', null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (52, 8, '앞사람이 주문한 음료와 똑같은 음료를 주문해 보세요', '잘 안 먹는 거라도 도전해 보는 거예요', '/drink.png', null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (53, 8, '<span>${number}번째</span>로 보이는 음식점에 들어가 보세요.', '평소 안 가던 곳이라도 말이죠.', '/restaruant.png', 1, 3, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (54, 8, '메뉴판의 <span>${number}번째</span> 메뉴를 드세요.', '잘 안 먹는 거라도 도전해 보는 거예요', '/food.png', 1, 5, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (55, 8, '<span>${number>번째</span>로 비싼 메뉴를 주문해서 먹어보세요.', '잘 안 먹는 거라도 도전해 보는 거예요', '/food.png', 1, 5, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (56, 8, '<span>${number>번째</span>로 싼 메뉴를 주문해서 먹어보세요.', '잘 안 먹는 거라도 도전해 보는 거예요', '/food.png', 1, 5, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (57, 8, '옆 테이블에서 뭘 먹는지 물어봐서 똑같이 시켜먹어요.', '낯 가리지 말고요!', '/food.png', null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (58, 8, '사장님께 가장 맛있는 메뉴를 물어봐서 주문하세요.', '사장님이 제일 잘 아시죠', '/food.png', null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (59, 8, '외국인 컨셉으로 영어로 한 번 주문해볼까요?', '재밌잖아요!', '/talk.png', null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (60, 8, '하천으로 이동하세요!', '?', null, null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (61, 8, '물가에 발을 한 번 담가 보세요.', '어때요, 새롭죠?', '/water.png', null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (62, 8, '물수제비를 한 번 해볼까요?', '이왕이면 예쁜 돌로 골라봐요', '/rock.png', null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (63, 8, '물 속에 무엇이 있는지 한 번 구경해보세요!', '더럽다면 유감이에요', '/fish.png', null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (64, 8, '영화관으로 이동하세요!', '?', null, null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (65, 8, '가장 빨리 볼 수 있는 영화를 예매해서 감상해보세요.', '새로운 장르도 시도해 봐요!', '/movie.png', null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (66, 8, '매점에 가서 음식을 사보세요.', '오늘만큼은 flex', '/movie.png', null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (67, 8, '혼자 온 사람과 함께 영화를 보자고 제안해보세요.', '쉘위...?', '/movie.png', null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (68, 8, '코인노래방으로 이동하세요!', '?', null, null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (69, 8, '코인노래방에 가서 인기차트 <span>${number}위</span>에 해당하는 노래를 불러 보세요!', '몰라도 재밌잖아요!', '/popular.png', 1, 100, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (70, 8, '코인노래방에 가서 <span>‘아이유’</span>의 노래를 불러보세요!', '스트레스 확 풀고 오세요', '/mike.png', null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (71, 8, '코인노래방에 가서 <span>‘방탄소년단’</span>의 노래를 불러보세요!', '스트레스 확 풀고 오세요', '/mike.png', null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (72, 8, '코인노래방에 가서 <span>‘장윤정’</span>의 노래를 불러보세요!', '스트레스 확 풀고 오세요', '/mike.png', null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (73, 8, '코인노래방에 가서 <span>‘허각’</span>의 노래를 불러보세요!', '스트레스 확 풀고 오세요', '/mike.png', null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (74, 8, '코인노래방에 가서 <span>최애곡</span>을 부르세요!', '스트레스 확 풀고 오세요', '/mike.png', null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (75, 9, '장소에서 나와 주변을 둘러 보세요.', '또 안 보이던 게 보일 거예요', '/nature.png', null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (76, 9, '쉴 곳을 찾아 눈을 감고 명상을 해 보세요.', '한 번씩 생각을 비워보는 것도 좋아요', '/meditation.png', null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (77, 9, '쉴 곳을 찾아 크게 숨을 쉬어 보세요.', '크게 숨을 쉬어본 게 언제가 마지막인가요?', '/breath.png', null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (78, 9, '장소에서 나와 미소를 지어 보세요.', '미소를 짓는 것만으로 기분이 좋아진대요', '/cloud.png', null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (79, 10, '지금 한 사람을 떠올려 보세요!', '?', null, null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (80, 10, '그 사람에게 <span>전화</span>해 보세요.', '두근두근', '/call.png', null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (81, 10, '그 사람에게 <span>사랑한다고</span>말해 보세요.', '두근두근', '/love.png', null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (82, 10, '그 사람에게 줄 <span>선물</span>을 사 보세요.', '두근두근', '/present.png', null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (83, 10, '그 사람에게 <span>편지</span>를 써 보세요.', '두근두근', '/letter.png', null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (84, 10, '그 사람에게 <span>카톡</span>을 해 보세요.', '두근두근', '/kakaotalk.png', null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (85, 10, '노래를 흥얼거리며 집으로 돌아가세요', '알찬 하루였길 바라요', '/song.png', null, null, null);
INSERT INTO MissionTemplate (id, step, body, quote, imagePath, startNumber, endNumber, isTransportation) VALUES (86, 10, '현재 위치에서 가장 가까운 친구를 만나보세요', '즉흥적인 만남도 즐거워요!', '/friend.png', null, null, null);
