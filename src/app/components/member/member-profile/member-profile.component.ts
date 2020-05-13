import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.css']
})

export class MemberProfileComponent implements OnInit {
  member: any;

  constructor(
    private route: ActivatedRoute, 
    private memberService: MemberService,
    private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.member = {};
    /*
     * this is required to make the parameter accessible here
     */
    this.activatedRoute.paramMap.subscribe(
      params => { 
        //look at how this is passed in help.component.html line 15
        //look at how the path is constructed in app-routing.module.ts line 53
        let id: number = Number(params.get('memberId'));
        this.memberService.getMemberProfile(id).subscribe(response => {
        console.log(response.object);
        this.member = response.object;
      })
    });
  }
}

