/**
*  Module
*
* gTableTest Description
*/
angular.module('test', ['objectTable'])
.controller('mainController', function($scope) {
    $scope.data = [
        { id: 01, 
          name: "姚宇飞", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 10,
          grade02:0, grade03:0
        },
        { id: 02, 
          name: "朱学成", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 0, work02: 0, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 03, 
          name: "岑灏", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 04, 
          name: "朱晨煜", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 05, 
          name: "宋治民", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 06, 
          name: "潘雪", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 07, 
          name: "钱伟杰", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 08, 
          name: "姜凯", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 09, 
          name: "陆文涛", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 0, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 10, 
          name: "朱雨婷", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 11, 
          name: "吕涵之", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 5,
          grade02:0, grade03:0
        },
        { id: 12, 
          name: "沈丹青", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 10,
          grade02:0, grade03:0
        },
        { id: 13, 
          name: "钱都", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 15, 
          name: "杜任杰", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 16, 
          name: "叶信哲", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 17, 
          name: "蒋轶聪", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 18, 
          name: "张虓敏", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 19, 
          name: "陈黎铭", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 20, 
          name: "何桂清", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 21, 
          name: "余银超", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 22, 
          name: "劳锦锞", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 23, 
          name: "周渠成", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 24, 
          name: "徐炜昊", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 0, work02: 0, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 26, 
          name: "盛绍斌", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 27, 
          name: "王海波", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 0, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 28, 
          name: "郑涛", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 29, 
          name: "郑可琪", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 30, 
          name: "潘云锋", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 0, work02: 0, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 31, 
          name: "陈汇", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 5,
          grade02:0, grade03:0
        },
        { id: 33, 
          name: "蔡浩然", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 34, 
          name: "冯盛鹏", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 35, 
          name: "张南", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 36, 
          name: "黄小翠", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 37, 
          name: "曾思思", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 38, 
          name: "李雄俊", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 39, 
          name: "苏彬彬", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 40, 
          name: "黄鑫鑫", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 42, 
          name: "姜智孟", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 44, 
          name: "白炳钿", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 45, 
          name: "胡利明", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 46, 
          name: "张益桐", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
        { id: 47, 
          name: "许桃美", 
          preExam1: 0, preExam2: 0, preExam3: 0, 
          work01: 5, work02: 5, work03: 0, work04: 0, 
          work05: 0, work06: 0, work07: 0, work08: 0, 
          work09: 0, work10: 0, github: 0,
          grade02:0, grade03:0
        },
    ];
    $scope.getGrade = function(data){
        //return if empty or not ready
        if(!data || !data.length) return;

        //for(var i=0; i<data.length; i++){
          // totalNumber = totalNumber + parseFloat(data[i].money);
          data.isPreExame=false;
          data.preExam1Data=data.preExam1;
          data.preExam2Data=data.preExam2;
          data.preExam3Data=data.preExam3;
          if (data.preExam1=="免考"||data.preExam2=="免考"||data.preExam3=="免考") {
              data.preExam1Data=data.preExam2Data=data.preExam3Data=0;
              data.grade03=100;
              data.isPreExame=true;
          };
          data.grade01=data.preExam1Data+data.preExam2Data+data.preExam3Data+data.work01+data.work02+data.work03+data.work04+data.work05+data.work06+data.work07+data.work08+data.work09+data.work10+data.github;
          data.grade04=$scope.toDecimal(data.grade01*0.2+data.grade02*0.3+data.grade03*0.5);
        //}

    };

    $scope.toDecimal=function(x) {    
        var f = parseFloat(x);    
        if (isNaN(f)) {    
            return;    
        }    
        f = Math.round(x*100)/100;    
        return f;    
    }   
    
    $scope.getGrade($scope.data);
})