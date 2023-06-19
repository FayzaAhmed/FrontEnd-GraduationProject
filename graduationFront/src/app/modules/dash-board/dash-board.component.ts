import { Component, OnInit, Renderer2 } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss'],
})
export class DashBoardComponent implements OnInit {
  serviceName: string = 'استخراج بطاقه';
  branchName: string = 'branch1';
  positiveListCount: number = 0;
  negativeListCount: number = 0;
  neutralListCount: number = 0;
  totalReviewsCount :number = 0;
  positiveListReviews:[] = []
  neutralListReviews:[] = []
  negativeListReviews:[] = []
  bbb = 4;
  scrollToSection(element: HTMLElement): void {
    this.renderer.setProperty(
      document.documentElement,
      'scrollTop',
      element.offsetTop
    );
  }

  donutChart :any

  positiveAreaSplineChart = new Chart({
    chart: {
      styledMode: true,
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false,
        },
      },
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: 'مؤشر التعليقات الايجابية',
    },
    yAxis: {
      visible: true,
    },

    xAxis: {
      visible: true,

      categories: [
        'Jaaaaaan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },

    defs: {
      gradient0: {
        tagName: 'linearGradient',
        id: 'gradient-0',
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 1,
        children: [
          {
            tagName: 'stop',
            offset: 0,
          },
          {
            tagName: 'stop',
            offset: 1,
          },
        ],
      },
    } as any,

    series: [
      {
        type: 'areaspline',
        keys: ['y', 'selected'],
        data: [
          [2, true],
          [this.bbb, true],
          [106.4, true],
          [144.0, true],
          [176.0, true],
          [135.6, false],
          [148.5, false],
          [216.4, false],
          [194.1, false],
          [95.6, false],
          [54.4, false],
        ],
      },
    ],
  });

  negativeAreaSplineChart = new Chart({
    chart: {
      styledMode: true,
    },
    plotOptions: {
      series: {
        marker: {
          enabled: false,
        },
      },
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    title: {
      text: 'مؤشر التعليقات السلبيه',
    },
    yAxis: {
      visible: true,
    },

    xAxis: {
      visible: true,

      categories: [
        'Jaaaaaan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },

    defs: {
      gradient0: {
        tagName: 'linearGradient',
        id: 'gradient-0',
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 1,
        children: [
          {
            tagName: 'stop',
            offset: 0,
          },
          {
            tagName: 'stop',
            offset: 1,
          },
        ],
      },
    } as any,

    series: [
      {
        color: 'green',
        type: 'areaspline',
        keys: ['y', 'selected'],
        data: [
          [2, true],
          [this.bbb, true],
          [106.4, true],
          [144.0, true],
          [176.0, true],
          [135.6, false],
          [148.5, false],
          [216.4, false],
          [194.1, false],
          [95.6, false],
          [54.4, false],
        ],
      },
    ],
  });

  barChart = new Chart({
    chart: {
      type: 'bar',
    },
    credits: {
      enabled: false,
    },
    title: {
      text: 'Bar',
    },
    yAxis: {
      visible: false,
      gridLineColor: '#fff',
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      lineColor: '#fff',
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },

    plotOptions: {
      series: {
        borderRadius: 5,
      } as any,
    },

    series: [
      {
        type: 'bar',
        color: '#506ef9',
        data: [
          { y: 20.9 },
          { y: 71.5 },
          { y: 106.4 },
          { y: 129.2 },
          { y: 144.0, color: '#ffe8df' },
          { y: 176.0 },
          { y: 135.6 },
          { y: 148.5 },
          { y: 216.4, color: '#fc5185' },
          { y: 194.1 },
          { y: 95.6 },
          { y: 54.4 },
        ],
      },
    ],
  });

  constructor(private http: HttpClient, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.analyzeSentiment();
    console.log("here in oninit");
    console.log(this.positiveListCount);
    
    
  }

  analyzeSentiment(): void {
    const apiURL = 'http://127.0.0.1:8000/serviceReviews/';

    const requestBody = {
      serviceName: this.serviceName,
      branchName: this.branchName,
    };

    this.http.post<any>(apiURL, requestBody).subscribe({
      next: (response) => {
        
        this.totalReviewsCount = response.positiveList.length + response.negativeList.length + response.neutralList.length 
        this.positiveListCount = (response.positiveList.length / this.totalReviewsCount) * 100;
        this.negativeListCount = (response.negativeList.length / this.totalReviewsCount) * 100;
        this.neutralListCount = (response.neutralList.length / this.totalReviewsCount) * 100;
        this.positiveListReviews = response.positiveList
        this.negativeListReviews = response.negativeList
        this.neutralListReviews = response.neutralList
        console.log(this.positiveListReviews);
        
        this.donutChart = new Chart({
          chart: {
            type: 'pie',
      
            plotShadow: false,
          },
          credits: {
            enabled: false,
          },
          plotOptions: {
            pie: {
              events: {
                click: (event: any) => {
                  const point = event.point;
                  if (point.name === 'ايجابي') {
                    const positiveReviewsSection =
                      document.getElementById('positive');
                    if (positiveReviewsSection) {
                      this.scrollToSection(positiveReviewsSection);
                    }
                  }
                  if (point.name === 'سلبي') {
                    const negativeReviewsSection =
                      document.getElementById('negative');
                    if (negativeReviewsSection) {
                      this.scrollToSection(negativeReviewsSection);
                    }
                  }
                  if (point.name === 'محايد') {
                    const neutralReviewsSection = document.getElementById('neutral');
                    if (neutralReviewsSection) {
                      this.scrollToSection(neutralReviewsSection);
                    }
                  }
                },
              },
      
              innerSize: '80%',
              borderWidth: 0,
              borderColor: 'black',
              slicedOffset: 20,
              dataLabels: {
                connectorWidth: 0,
                style: {
                  fontSize: '14px',
                },
              },
            },
          },
          title: {
            verticalAlign: 'middle',
            floating: true,
            text: 'احصائيات',
          },
          legend: {
            enabled: false,
          },
          series: [
            {
              type: 'pie',
              data: [
                { name: 'ايجابي', y: this.positiveListCount, color: '#82c65a' },
                { name: 'سلبي', y: this.negativeListCount, color: '#f26925' },
                { name: 'محايد', y: this.neutralListCount, color: '#edcd33' },
              ],
            },
          ],
        });
      },
      error: (error) => {
        console.log('Error fetching sentiment analysis data:', error);
      },
    });
  }
}
