(()=>{"use strict";class e{get totalScore(){return n.getInstance().activeElementsScore.reduce(((e,t)=>e+t),0)}render(){document.querySelector(".score__number").textContent=String(this.totalScore)}constructor(){}static getInstance(){return e.instance||(e.instance=new e),e.instance}}class t{constructor(e){this.element=e,e.addEventListener("click",this.clickEventHandler.bind(this))}clickEventHandler(){this.element.classList.toggle("food--active"),e.getInstance().render()}}class n{get activeElements(){return this._activeElements=[],this.elements.forEach((e=>{e.classList.contains("food--active")&&this._activeElements.push(e)})),this._activeElements}get activeElementsScore(){return this._activeElementsScore=[],this.activeElements.forEach((e=>{const t=e.querySelector(".food__score");t&&this._activeElementsScore.push(Number(t.textContent))})),this._activeElementsScore}constructor(){this.elements=document.querySelectorAll(".food"),this._activeElements=[],this._activeElementsScore=[],this.elements.forEach((e=>{new t(e)}))}static getInstance(){return n.instance||(n.instance=new n),n.instance}}n.getInstance()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJtQkFDTyxNQUFNQSxFQUNULGNBQUlDLEdBRUEsT0FEY0MsRUFBTUMsY0FDUEMsb0JBQW9CQyxRQUFPLENBQUNDLEVBQU9DLElBQVVELEVBQVFDLEdBQU8sRUFDN0UsQ0FDQSxNQUFBQyxHQUNJQyxTQUFTQyxjQUFjLGtCQUFrQkMsWUFBY0MsT0FBT0MsS0FBS1osV0FDdkUsQ0FDQSxXQUFBYSxHQUFnQixDQUNoQixrQkFBT1gsR0FJSCxPQUhLSCxFQUFNZSxXQUNQZixFQUFNZSxTQUFXLElBQUlmLEdBRWxCQSxFQUFNZSxRQUNqQixFQ2RHLE1BQU1DLEVBQ1QsV0FBQUYsQ0FBWUcsR0FDUkosS0FBS0ksUUFBVUEsRUFDZkEsRUFBUUMsaUJBQWlCLFFBQVNMLEtBQUtNLGtCQUFrQkMsS0FBS1AsTUFDbEUsQ0FDQSxpQkFBQU0sR0FDSU4sS0FBS0ksUUFBUUksVUFBVUMsT0FBTyxnQkFDaEJ0QixFQUFNRyxjQUNkSyxRQUNWLEVDVEcsTUFBTU4sRUFDVCxrQkFBSXFCLEdBT0EsT0FOQVYsS0FBS1csZ0JBQWtCLEdBQ3ZCWCxLQUFLWSxTQUFTQyxTQUFTVCxJQUNmQSxFQUFRSSxVQUFVTSxTQUFTLGlCQUMzQmQsS0FBS1csZ0JBQWdCSSxLQUFLWCxFQUM5QixJQUVHSixLQUFLVyxlQUNoQixDQUNBLHVCQUFJcEIsR0FRQSxPQVBBUyxLQUFLZ0IscUJBQXVCLEdBQzVCaEIsS0FBS1UsZUFBZUcsU0FBU1QsSUFDekIsTUFBTWEsRUFBWWIsRUFBUVAsY0FBYyxnQkFDcENvQixHQUNBakIsS0FBS2dCLHFCQUFxQkQsS0FBS0csT0FBT0QsRUFBVW5CLGFBQ3BELElBRUdFLEtBQUtnQixvQkFDaEIsQ0FDQSxXQUFBZixHQUNJRCxLQUFLWSxTQUFXaEIsU0FBU3VCLGlCQUFpQixTQUMxQ25CLEtBQUtXLGdCQUFrQixHQUN2QlgsS0FBS2dCLHFCQUF1QixHQUM1QmhCLEtBQUtZLFNBQVNDLFNBQVNULElBQ25CLElBQUlELEVBQUtDLEVBQVEsR0FFekIsQ0FDQSxrQkFBT2QsR0FJSCxPQUhLRCxFQUFNYSxXQUNQYixFQUFNYSxTQUFXLElBQUliLEdBRWxCQSxFQUFNYSxRQUNqQixFQ2pDSmIsRUFBTUMsYSIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHQtbGVzc29uLy4vc3JjL2Zvb2QtYXBwL3Njb3JlLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtbGVzc29uLy4vc3JjL2Zvb2QtYXBwL2Zvb2QudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1sZXNzb24vLi9zcmMvZm9vZC1hcHAvZm9vZHMudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC1sZXNzb24vLi9zcmMvZm9vZC1hcHAvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb29kcyB9IGZyb20gXCIuL2Zvb2RzXCI7XG5leHBvcnQgY2xhc3MgU2NvcmUge1xuICAgIGdldCB0b3RhbFNjb3JlKCkge1xuICAgICAgICBjb25zdCBmb29kcyA9IEZvb2RzLmdldEluc3RhbmNlKCk7XG4gICAgICAgIHJldHVybiBmb29kcy5hY3RpdmVFbGVtZW50c1Njb3JlLnJlZHVjZSgodG90YWwsIHNjb3JlKSA9PiB0b3RhbCArIHNjb3JlLCAwKTtcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNjb3JlX19udW1iZXJcIikudGV4dENvbnRlbnQgPSBTdHJpbmcodGhpcy50b3RhbFNjb3JlKTtcbiAgICB9XG4gICAgY29uc3RydWN0b3IoKSB7IH1cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICghU2NvcmUuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIFNjb3JlLmluc3RhbmNlID0gbmV3IFNjb3JlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFNjb3JlLmluc3RhbmNlO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFNjb3JlIH0gZnJvbSBcIi4vc2NvcmVcIjtcbmV4cG9ydCBjbGFzcyBGb29kIHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRoaXMuY2xpY2tFdmVudEhhbmRsZXIuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIGNsaWNrRXZlbnRIYW5kbGVyKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImZvb2QtLWFjdGl2ZVwiKTtcbiAgICAgICAgY29uc3Qgc2NvcmUgPSBTY29yZS5nZXRJbnN0YW5jZSgpO1xuICAgICAgICBzY29yZS5yZW5kZXIoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBGb29kIH0gZnJvbSBcIi4vZm9vZFwiO1xuZXhwb3J0IGNsYXNzIEZvb2RzIHtcbiAgICBnZXQgYWN0aXZlRWxlbWVudHMoKSB7XG4gICAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZm9vZC0tYWN0aXZlXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmVFbGVtZW50cztcbiAgICB9XG4gICAgZ2V0IGFjdGl2ZUVsZW1lbnRzU2NvcmUoKSB7XG4gICAgICAgIHRoaXMuX2FjdGl2ZUVsZW1lbnRzU2NvcmUgPSBbXTtcbiAgICAgICAgdGhpcy5hY3RpdmVFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBmb29kU2NvcmUgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vZF9fc2NvcmVcIik7XG4gICAgICAgICAgICBpZiAoZm9vZFNjb3JlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudHNTY29yZS5wdXNoKE51bWJlcihmb29kU2NvcmUudGV4dENvbnRlbnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmVFbGVtZW50c1Njb3JlO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9vZFwiKTtcbiAgICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5fYWN0aXZlRWxlbWVudHNTY29yZSA9IFtdO1xuICAgICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIG5ldyBGb29kKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAoIUZvb2RzLmluc3RhbmNlKSB7XG4gICAgICAgICAgICBGb29kcy5pbnN0YW5jZSA9IG5ldyBGb29kcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBGb29kcy5pbnN0YW5jZTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBGb29kcyB9IGZyb20gXCIuL2Zvb2RzXCI7XG5Gb29kcy5nZXRJbnN0YW5jZSgpO1xuIl0sIm5hbWVzIjpbIlNjb3JlIiwidG90YWxTY29yZSIsIkZvb2RzIiwiZ2V0SW5zdGFuY2UiLCJhY3RpdmVFbGVtZW50c1Njb3JlIiwicmVkdWNlIiwidG90YWwiLCJzY29yZSIsInJlbmRlciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwiU3RyaW5nIiwidGhpcyIsImNvbnN0cnVjdG9yIiwiaW5zdGFuY2UiLCJGb29kIiwiZWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGlja0V2ZW50SGFuZGxlciIsImJpbmQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJhY3RpdmVFbGVtZW50cyIsIl9hY3RpdmVFbGVtZW50cyIsImVsZW1lbnRzIiwiZm9yRWFjaCIsImNvbnRhaW5zIiwicHVzaCIsIl9hY3RpdmVFbGVtZW50c1Njb3JlIiwiZm9vZFNjb3JlIiwiTnVtYmVyIiwicXVlcnlTZWxlY3RvckFsbCJdLCJzb3VyY2VSb290IjoiIn0=