import { isPlatformBrowser, Location } from "@angular/common";
import { Component, Inject, Injectable, OnInit, PLATFORM_ID } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from "@angular/router";
import { SpaceXProgram } from "../model/program.data";
import { ApiCallService } from "../services/api-call.service";
import { AppSettingsService } from "../services/app-settings.service";
@Component(
    {
        selector:'launches',
        styleUrls:['./launches.styles.scss'],
        templateUrl:'./launches.template.html'
    })
    export class LaunchesComponent implements OnInit
    {

        launchItems:SpaceXProgram[]=[];
        filters=
            {
                limit:100,
                launch_success:'',
                land_success:'',
                launch_year:''
            }
        launchYears:number[]=[];
        isPlatformBrowser=false;
        constructor(private apiService:ApiCallService,
            @Inject(PLATFORM_ID) platformId:string,
            private activatedRoute:ActivatedRoute,
            public appSettings:AppSettingsService,
            private location:Location,
            private router:Router)
        {
            this.isPlatformBrowser=isPlatformBrowser(platformId);
            
            //Adding static year filters
            const currentYear=new Date().getFullYear();
            for(let i=2006;i<=currentYear;i++)
            {
                this.launchYears.push(i);
            }

            this.launchItems=this.activatedRoute.snapshot.data['launchItems']; //Get the data from state 
            this.router.events.subscribe(event=>
                {
                    if(event instanceof NavigationEnd)
                    {   
                           
                        console.log('Navigation End event triggered',this.router.parseUrl(this.router.url).queryParams);
                        const queryParams=Object.assign({},this.router.parseUrl(this.router.url).queryParams);
                        Object.keys(queryParams).forEach(param=>
                            {
                                if(this.filters[param]!=undefined)
                                {
                                    this.filters[param]=queryParams[param];
                                }
                            });
                    }
                })

        }

        ngOnInit(): void {
            this.activatedRoute.queryParams.subscribe(data=>
                {
                    console.log('Query Parameter changed',data);
                });     
        }

        ngAfterContentInit()
        {
           if(this.isPlatformBrowser)
           {
            console.log("In ngAfterContentInit");
            document.addEventListener('scroll',this.lazyLoadImages);
            document.addEventListener('resize',this.lazyLoadImages);
            document.addEventListener('orientationChange',this.lazyLoadImages);
           } 

        }

        lazyLoadImages()
        {
            let imgTags=document.getElementsByClassName('lazyLoad');
            let windowScrollPosition=window.pageYOffset;   
            let windowInnerHeight=window.innerHeight;        
            for(let i=0;i<imgTags.length;i++)
            {  
                let img=<HTMLElement>imgTags.item(i);
                if(img.getBoundingClientRect().top<(windowInnerHeight+windowScrollPosition))
                {
                    if(img.attributes.getNamedItem('data-src') && img.attributes.getNamedItem('data-src').value)
                    {
                        img.setAttribute('src',img.attributes.getNamedItem('data-src').value);
                    }
                 
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

        //Event Bubbling implemented
        setYearFilter(event)
        {
            if(event.target.localName=="button")
            {
                let selectedYear=event.target.name;
                if(this.filters.launch_year==selectedYear)
                {
                    //CLicked again
                    this.filters.launch_year='';
                }
                else
                {
                    this.filters.launch_year=selectedYear;
                }
                this.getLaunchItems();
            }
            
        }

        setSuccessLaunchFilter(value)
        {
            if(this.filters.launch_success===value)
            {
                //Checked already
                this.filters.launch_success='';
            }
            else
            {
                this.filters.launch_success=value;

            }
            this.getLaunchItems();
        }

        setSuccessLandingFilter(value)
        {
            if(this.filters.land_success===value)
            {
                //Checked already
                this.filters.land_success='';
            }
            else
            {
                this.filters.land_success=value;
            }
            this.getLaunchItems();
        }

        getLaunchItems()
        {
            let queryParams='';
            Object.keys(this.filters).forEach(filter=>
                {
                    if(this.filters[filter]!=='')
                    {   
                        queryParams+=filter+"="+this.filters[filter]+"&";
                    }
                });
            queryParams=queryParams.charAt(queryParams.length-1)=='&'?queryParams.substring(0,queryParams.length-1):queryParams;
            this.location.go('',queryParams); //For changing the query params of current page

            this.apiService.getLaunches(this.filters).subscribe((data:any)=>
                {
                    this.launchItems=data;
                },error=>
                {
                    console.log(error);
                });
        }


    }