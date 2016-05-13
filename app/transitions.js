export default function(){
  this.transition(
    this.fromRoute('enrollment.welcome'),
    this.toRoute('enrollment.user-details'),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('enrollment.user-details'),
    this.toRoute('enrollment.saq-detection'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
