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

  constructor(private route: ActivatedRoute, private memberService: MemberService) { }

  ngOnInit() {
    this.member = {};
    this.memberService.getMemberProfile().subscribe(response => {
      console.log(response.object);
      this.member = response.object;
    })
  }
}

