const {
  addNextMeetup,
  sortByDateDesc,
  groupByDate,
  meetupIsBefore,
  groupMeetupByDate
} = require('./meetup');

describe('Testing meetup utils', () => {
  it('sortByDate', () => {
    const meetups = [
      { date: new Date('2019-05-08') },
      { date: new Date('2015-04-08') },
      { date: new Date('2020-05-08') },
      { date: new Date('2012-05-08') }
    ];
    const res = sortByDateDesc(meetups);
    expect(res).toEqual([
      { date: new Date('2020-05-08') },
      { date: new Date('2019-05-08') },
      { date: new Date('2015-04-08') },
      { date: new Date('2012-05-08') }
    ]);
  });

  it('groupByDate', () => {
    const now = new Date('2016-05-08');
    const meetups = [
      { date: new Date('2020-05-08') },
      { date: new Date('2019-05-08') },
      { date: new Date('2015-04-08') },
      { date: new Date('2012-05-08') }
    ];
    const res = groupByDate(now)(meetups);
    expect(res).toEqual({
      future: [
        { date: new Date('2020-05-08') },
        { date: new Date('2019-05-08') }
      ],
      past: [{ date: new Date('2015-04-08') }, { date: new Date('2012-05-08') }]
    });
  });

  describe('meetupIsBefore', () => {
    it('truthy case', () => {
      const now = new Date('2016-3-2');
      const m = { date: new Date('2016-2-25') };
      expect(meetupIsBefore(now)(m)).toBeTruthy();
    });

    it('falsy case', () => {
      const now = new Date('2016-3-2');
      const m = { date: new Date('2019-2-25') };
      expect(meetupIsBefore(now)(m)).toBeFalsy();
    });
  });

  describe('groupMeetupByDate', () => {
    it('is should work', () => {
      const now = new Date('2013-05-02');
      const meetups = [
        { date: new Date('2019-08-25') },
        { date: new Date('2016-09-25') },
        { date: new Date('1993-08-25') },
        { date: new Date('2012-01-25') },
        { date: new Date('2015-08-25') },
        { date: new Date('1998-08-25') }
      ];
      const res = groupMeetupByDate(now)(meetups);
      expect(res).toEqual({
        next: { date: new Date('2015-08-25') },
        past: [
          { date: new Date('2012-01-25') },
          { date: new Date('1998-08-25') },
          { date: new Date('1993-08-25') }
        ],
        future: [
          { date: new Date('2019-08-25') },
          { date: new Date('2016-09-25') },
          { date: new Date('2015-08-25') }
        ]
      });
    });
  });

  describe('AddNextMeetup', () => {
    const data = { future: [{ ae: 'aer' }, { ae: 'dsc' }, { ae: 'aze' }] };
    const res = addNextMeetup(data);
    expect(res).toEqual({
      future: [{ ae: 'aer' }, { ae: 'dsc' }, { ae: 'aze' }],
      next: { ae: 'aze' }
    });
  });
});
