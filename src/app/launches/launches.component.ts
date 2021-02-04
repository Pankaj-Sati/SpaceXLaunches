import { Component, OnInit } from "@angular/core";
import { SpaceXProgram } from "../model/program.data";
import { ApiCallService } from "../services/api-call.service";
@Component(
    {
        styleUrls:['./launches.styles.scss'],
        templateUrl:'./launches.template.html'
    })
    export class LaunchesComponent implements OnInit
    {

        launchItems:SpaceXProgram[]=[];
        
        filterSuccessfulLaunch:boolean=null; //For filtering successful launches
        filterSuccessfulLanding:boolean=null; //For filtering successful landings
        filterLaunchYear:number=null; //For filtering by year
        launchYears:number[]=[];

        constructor(private apiService:ApiCallService)
        {
            for(let i=0;i<100;i++)
            {
                let obj=new SpaceXProgram();
                obj.flight_number=String(i);
                obj.land_success=String(i%3==0);
                obj.launch_success=String(i%2==0);
                obj.launch_year=String(2021);
                obj.mission_id=["1","2","3","4","5","6","1","2","3","4","5","6","1","2","3","4","5","6","1","2","3","4","5","6","1","2","3","4","5","6","1","2","3","4","5","6","1","2","3","4","5","6","1","2","3","4","5","6"];
                obj.mission_name="Mission "+i;
                obj.images.small=i%2==0?"https://images2.imgbox.com/89/54/61VCHZwd_o.png":"https://images2.imgbox.com/f1/4a/WAkSmKfY_o.png";
                obj.images.large=i%2==0?"https://images2.imgbox.com/08/a2/bPpNeIRJ_o.png":"https://images2.imgbox.com/a0/ab/XUoByiuR_o.png";
                this.launchItems.push(obj);
            }

            //Adding static year filters
            for(let i=2006;i<=2020;i++)
            {
                this.launchYears.push(i);
            }
        }

        ngOnInit(): void {
             this.getLaunchItems();
        }

        ngAfterContentInit()
        {
            console.log("In ngAfterContentInit");
            document.addEventListener('scroll',this.lazyLoadImages);
            document.addEventListener('resize',this.lazyLoadImages);
            document.addEventListener('orientationChange',this.lazyLoadImages);

        }

        lazyLoadImages()
        {
           
            let imgTags=document.getElementsByClassName('lazyLoad');
            let windowScrollPosition=window.pageYOffset;   
            let windowInnerHeight=window.innerHeight;   
            console.log('Called lazyLoadImages()',windowScrollPosition,windowInnerHeight);      
            for(let i=0;i<imgTags.length;i++)
            {  
                let img=<HTMLElement>imgTags.item(i);
                if(img.getBoundingClientRect().top<(windowInnerHeight+windowScrollPosition))
                {
                    img.setAttribute('src',img.attributes.getNamedItem('data-src').value);
                    img.classList.remove('lazyLoad');
                }
            }

            if(imgTags.length==0)
            {
                document.removeEventListener('scroll',this.lazyLoadImages);
                document.removeEventListener('resize',this.lazyLoadImages);
                document.removeEventListener('orientationChange',this.lazyLoadImages);
            }

        }

        setYearFilter(event)
        {
            if(event.target.localName=="button")
            {
                let selectedYear=Number(event.target.name);
                if(this.filterLaunchYear==selectedYear)
                {
                    //CLicked again
                    this.filterLaunchYear=null;
                }
                else
                {
                    this.filterLaunchYear=selectedYear;
                }
            }
            this.getLaunchItems();
        }

        setSuccessLaunchFilter(value)
        {
            console.log(value);
            if(this.filterSuccessfulLaunch==Boolean(value))
            {
                //Checked already
                this.filterSuccessfulLaunch=null;
            }
            else
            {
                this.filterSuccessfulLaunch=Boolean(value)
            }
            this.getLaunchItems();
        }

        setSuccessLandingFilter(value)
        {
            console.log(value);
            if(this.filterSuccessfulLanding==Boolean(value))
            {
                //Checked already
                this.filterSuccessfulLanding=null;
            }
            else
            {
                this.filterSuccessfulLanding=Boolean(value)
            }
            this.getLaunchItems();
        }

        getLaunchItems()
        {
            let params=
            {
                limit:100,
                launch_success:this.filterSuccessfulLaunch??'',
                land_success:this.filterSuccessfulLanding??'',
                launch_year:this.filterLaunchYear??''
            }
            this.apiService.getLaunches(params).subscribe(data=>
                {
                    console.log(data);
                },error=>
                {
                    console.log(error);
                });
        }


    }