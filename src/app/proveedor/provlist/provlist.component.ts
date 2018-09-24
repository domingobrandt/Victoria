import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proveedor } from "../proveedor";
import { ProveedorService } from "../proveedor.service";
@Component({
  selector: 'app-provlist',
  templateUrl: './provlist.component.html',
  styleUrls: ['./provlist.component.scss']
})
export class ProvlistComponent implements OnInit {

  list: Proveedor[];

  constructor(private router: Router,
    private service: ProveedorService) { }

  ngOnInit() {
    this.service.getProveedor()
    .subscribe(
        rs => this.list = rs,
        er => console.log(er),
        () => console.log(this.list)
    )
  }

}
