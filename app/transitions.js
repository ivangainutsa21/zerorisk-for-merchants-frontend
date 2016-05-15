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

  this.transition(
    // compare them by id and only run this animation if we're moving to
    // a value with a higher id.
    this.toValue(function(toValue, fromValue) {
      return toValue && fromValue && toValue > fromValue;
    }),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
