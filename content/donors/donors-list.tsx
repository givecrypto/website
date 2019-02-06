/**
 * @description Person Card
 * @param {name} string
 * @param {role} string
 * @param {filename} string // brian-armstrong // must include .png and .webm files aswell as @2x versions for each in /static/images/
 * @example: {
 *  name: 'Brian Armstrong',
 *  role: 'CEO, Coinbase',
 *  filename: 'brian-armstrong'
 * }
 */

/**
 * @description Person
 * @param {name[]} string
 * @example: 'Brian Armstrong',
 */

export interface Donor {
  name: string;
  role?: string;
  filename: string;
}
export interface DonorSegment {
  [key: string]: Donor[];
}

export const donors: DonorSegment = {
  /**
   * @param {person[]} Person
   */
  "$1M+": [
    {
      name: "Brian Armstrong",
      role: "CEO, Coinbase",
      filename: "brian-armstrong",
    },
    {
      name: "Chris Larsen",
      role: "Executive Chairman, Ripple",
      filename: "chris-larsen",
    },
    {
      name: "Zooko Wilcox",
      role: "CEO, the Zcash Company",
      filename: "zooko",
    },
  ],

  "$100k+": [
    {
      name: "Brad Garlinghouse",
      role: "CEO, Ripple",
      filename: "brad-garlinghouse",
    },
    {
      name: "Brock Pierce",
      role: "Entrepreneur, Bitcoin Foundation",
      filename: "brock-pierce",
    },
    {
      name: "Joanne and Fred Wilson",
      filename: "fred-joanne",
    },
    {
      name: "Matthew Roszak",
      role: "Co-Founder, Bloq",
      filename: "matthew-roszak",
    },
    {
      name: "Matt Mochary",
      role: "CEO, The Mochary Group",
      filename: "matt-mochary",
    },
    {
      name: "Bitmain",
      role: "",
      filename: "bitmain",
    },
    {
      name: "Roger Ver",
      role: "CEO, Bitcoin.com",
      filename: "roger-ver",
    },
    {
      name: "Anonymous",
      filename: "placeholder",
    },
    {
      name: "Ribbit Capital",
      filename: "ribbit-capital",
    },
    {
      name: "Ron Conway",
      role: "Founder, SV Angel",
      filename: "ron-conway",
    },
  ],
  "$25k+": [
    {
      name: "Arthur Hayes",
      role: "Co-founder & CEO, BitMEX",
      filename: "arthur-hayes",
    },
    {
      name: "Boris Wertz",
      role: "General Partner, Version One Ventures",
      filename: "boris-wertz",
    },
    {
      name: "Fred Ehrsam",
      filename: "fred-ehrsam",
    },
    {
      name: "Jessica Livingston",
      role: "Founder, Partner - YCombinator",
      filename: "jessica-livingston",
    },
    {
      name: "Linda Xie",
      role: "Co-founder, Scalar Capital",
      filename: "linda-xie",
    },
    {
      name: "Meltem Demirors",
      role: "Athena Capital",
      filename: "meltem-demirors",
    },
    {
      name: "Steve Jang",
      role: "Founder, Kindred Ventures",
      filename: "steve-jang",
    },
    {
      name: "Topher Conway",
      role: "Partner, SV Angel",
      filename: "topher-conway",
    },
    {
      name: "Anonymous",
      filename: "placeholder",
    },
  ],
  "$10k+": [
    {
      name: "Ted Rogers",
      role: "President, Xapo",
      filename: "ted-rogers",
    },
    {
      name: "Kathryn Haun",
      filename: "kathryn-haun",
    },
  ],
};

export default donors;
